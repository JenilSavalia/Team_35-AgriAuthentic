import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import * as Chart from 'chart.js';
import "chart.js/auto";
import { useTranslation } from 'react-i18next'; // Import useTranslation

const API_URL = "http://127.0.0.1:5000/api/sensor_data";
const standardRanges = {
  soil_moisture: { min: 30, max: 70 },
  soil_temperature: { min: 15, max: 30 },
  pH: { min: 6.5, max: 7.5 },
  ec: { min: 1.2, max: 2.0 },
  nitrogen: { min: 20, max: 40 },
  phosphorus: { min: 10, max: 30 },
  potassium: { min: 100, max: 250 },
  water_tds: { min: 100, max: 500 },
};
const parameterIcons = {
  soil_moisture: "💧", soil_temperature: "🌡️", pH: "⚗️", ec: "⚡",
  nitrogen: "🌱", phosphorus: "🌿", potassium: "🍃", water_tds: "💦",
};
const formatParameterName = (name) => name.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

const CertificationProgressBar = ({ certification, certificationPercent }) => {
  const progress = certificationPercent || 0;
  let statusText = "";
  let statusIcon = "🌱";
  let daysRemaining = 0;
  let statusClass = "text-green-600";

  if (validUntil) {
    const validDate = new Date(validUntil);
    const today = new Date();
    daysRemaining = Math.ceil((validDate - today) / (1000 * 60 * 60 * 24));
    
    if (daysRemaining < 30) {
      statusClass = "text-red-600";
    } else if (daysRemaining < 90) {
      statusClass = "text-amber-600";
    }
  }

  if (certification.includes("Full")) {
    statusText = t('dashboard.certification.fullOrganic');
    statusIcon = "🏆";
  } else if (certification.includes("Intermediate")) {
    statusText = t('dashboard.certification.intermediate');
    statusIcon = "🌿";
  } else {
    statusText = t('dashboard.certification.basic');
  }

  useEffect(() => {
    // Animate progress bar
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 300);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden border-l-4 border-green-500">
      <div className="px-6 py-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-green-700">{t('dashboard.certificationProgress')}</h2>
          <div className="bg-green-50 px-3 py-1 rounded-full">
            <span className="font-bold text-lg text-green-600">{progress}%</span>
          </div>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-6 mb-6 overflow-hidden">
          <div
            className="h-6 rounded-full bg-gradient-to-r from-green-300 via-green-500 to-green-600 relative"
            style={{
              width: `${animatedProgress}%`,
              transition: "width 1s ease-in-out"
            }}
          >
            <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
              {progress >= 20 ? `${progress}% Complete` : ""}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between mb-5">
          <div className="flex flex-col items-center">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${progress >= 40 ? "bg-green-500 text-white" : "bg-gray-200"}`}>
              {progress >= 40 && <span className="text-xs">✓</span>}
            </div>
            <span className="text-sm mt-1 font-medium">{t('dashboard.certification.basic')}</span>
          </div>
          <div className="h-px bg-gray-200 flex-1 mx-2"></div>
          <div className="flex flex-col items-center">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${progress >= 70 ? "bg-green-500 text-white" : "bg-gray-200"}`}>
              {progress >= 70 && <span className="text-xs">✓</span>}
            </div>
            <span className="text-sm mt-1 font-medium">{t('dashboard.certification.intermediate')}</span>
          </div>
          <div className="h-px bg-gray-200 flex-1 mx-2"></div>
          <div className="flex flex-col items-center">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${progress >= 100 ? "bg-green-500 text-white" : "bg-gray-200"}`}>
              {progress >= 100 && <span className="text-xs">✓</span>}
            </div>
            <span className="text-sm mt-1 font-medium">{t('dashboard.certification.fullOrganic')}</span>
          </div>
        </div>
        <div className="p-4 bg-green-50 rounded-lg border border-green-100">
          <div className="flex items-center">
            <span className="text-2xl mr-2">{statusIcon}</span>
            <div className="flex-1">
              <p className="font-medium text-green-800">{statusText}</p>
              <p className="text-sm text-green-700 mt-1">
                {progress < 100 ? t('dashboard.certification.continuePractices') : t('dashboard.certification.congratulations')}
              </p>
            </div>
            {validUntil && (
              <div className="ml-4 bg-white p-3 rounded-lg border border-green-100 text-center">
                <p className="text-xs text-gray-600 mb-1">Valid until</p>
                <p className="font-semibold text-green-800">{new Date(validUntil).toLocaleDateString()}</p>
                <p className={`text-xs font-medium mt-1 ${statusClass}`}>
                  {daysRemaining > 0 ? `${daysRemaining} days remaining` : "Expired"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const CertificationDetails = ({ reason, suggestions }) => {
  const { t } = useTranslation(); // Use the t function
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden h-full border-l-4 border-green-500 relative">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-green-700 mb-4 flex items-center">
          <span className="text-2xl mr-2">📜</span>
          {t('dashboard.certificationDetails')}
        </h3>
        <div className="p-4 bg-green-50 rounded-lg mb-3">
          <p className="text-gray-700">{reason}</p>
        </div>
        <div className="flex items-center p-3 bg-amber-50 rounded-lg border-l-4 border-amber-400">
          <span className="text-xl mr-2">ℹ️</span>
          <p className="text-sm text-amber-700">{t('dashboard.certification.basedOnStandards')}</p>
        </div>
        
        {/* Help button for AI suggestions */}
        <div className="flex justify-end mt-4">
          <button 
            onClick={() => setShowPopup(true)}
            className="flex items-center justify-center w-8 h-8 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            title={t('dashboard.aiRecommendations.title')}
          >
            <span className="text-xl">?</span>
          </button>
        </div>
      </div>

      {/* AI Recommendations Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full max-h-screen overflow-auto m-4 border-l-4 border-green-500 animate-fade-in">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h2 className="text-xl font-semibold text-green-700">{t('dashboard.aiRecommendations.title')}</h2>
                </div>
                <button 
                  onClick={() => setShowPopup(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {suggestions.length > 0 ? (
                <div className="space-y-3">
                  {suggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-start p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200 border-l-4 border-green-400">
                      <div className="mr-3 mt-1 bg-green-500 text-white h-5 w-5 rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-gray-700">{suggestion}</p>
                        <div className="mt-2 flex justify-end">
                          <button className="text-xs text-green-600 hover:underline flex items-center">
                            {t('dashboard.aiRecommendations.markAsDone')} <span className="ml-1">✓</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-green-50 p-6 rounded-lg text-center border border-green-100">
                  <span className="text-4xl mb-3 block">✅</span>
                  <p className="text-lg font-medium text-green-700">{t('dashboard.aiRecommendations.allOptimal')}</p>
                  <p className="text-sm text-green-600 mt-2">{t('dashboard.aiRecommendations.excellentPerformance')}</p>
                </div>
              )}
              
              <div className="mt-6 flex justify-end">
                <button 
                  onClick={() => setShowPopup(false)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  {t('dashboard.aiRecommendations.close')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// The original AIRecommendations component is no longer needed as a standalone component
// since we've integrated it into the popup in CertificationDetails

const TimelineGraph = () => {
  const [timelineView, setTimelineView] = useState("weekly");
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const parameters = {
    soil_moisture: { min: 30, max: 70, color: "#3B82F6" },
    soil_temperature: { min: 15, max: 30, color: "#F97316" },
    pH: { min: 6.5, max: 7.5, color: "#8B5CF6" },
    ec: { min: 1.2, max: 2.0, color: "#06B6D4" },
    nitrogen: { min: 20, max: 40, color: "#10B981" },
    phosphorus: { min: 10, max: 30, color: "#EC4899" },
    potassium: { min: 100, max: 250, color: "#F59E0B" },
    water_tds: { min: 100, max: 500, color: "#6366F1" },
  };

  const generateTimelineData = (view) => {
    const labels = view === "weekly"
      ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
      : ["Week 1", "Week 2", "Week 3", "Week 4"];

    const dataPoints = {};
    Object.keys(parameters).forEach(param => {
      const { min, max } = parameters[param];
      const midPoint = (min + max) / 2;
      const variance = (max - min) / 4;
      dataPoints[param] = labels.map((_, i) => {
        const trendFactor = view === "weekly"
          ? Math.sin((i / (labels.length - 1)) * Math.PI) * variance
          : (i < labels.length / 2 ? i / (labels.length / 2) : (labels.length - i) / (labels.length / 2)) * variance;
        return Math.max(min, Math.min(max, midPoint + trendFactor + (Math.random() * variance * 0.5)));
      });
    });
    return { labels, dataPoints };
  };

  useEffect(() => {
    const { labels, dataPoints } = generateTimelineData(timelineView);
    if (chartInstance.current) chartInstance.current.destroy();

    const datasets = Object.keys(parameters).map(param => {
      const { color } = parameters[param];
      return {
        label: formatParameterName(param),
        data: dataPoints[param],
        borderColor: color,
        backgroundColor: `${color}20`,
        borderWidth: 2,
        tension: 0.4,
        fill: false,
        hidden: !['soil_moisture', 'soil_temperature', 'pH'].includes(param),
      };
    });

    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart.Chart(ctx, {
      type: 'line',
      data: { labels, datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: { boxWidth: 12, usePointStyle: true, padding: 15 },
          },
          tooltip: {
            backgroundColor: "rgba(17, 24, 39, 0.8)",
            titleColor: "#F3F4F6",
            bodyColor: "#F3F4F6",
            padding: 12,
            mode: 'index',
            intersect: false,
            callbacks: {
              label: function (context) {
                const paramName = context.dataset.label.toLowerCase().replace(' ', '_');
                const value = context.raw.toFixed(1);
                const { min, max } = parameters[paramName.toLowerCase().replace(' ', '_')] || {};
                let status = "";
                if (min && max) {
                  if (context.raw < min) status = ` (${t('dashboard.status.low')})`;
                  else if (context.raw > max) status = ` (${t('dashboard.status.high')})`;
                  else status = ` (${t('dashboard.status.optimal')})`;
                }
                return `${context.dataset.label}: ${value}${status}`;
              }
            }
          },
        },
        scales: {
          y: { grid: { color: "rgba(107, 114, 128, 0.1)" }, ticks: { font: { size: 10 } } },
          x: { grid: { display: false } },
        },
        interaction: { mode: 'index', intersect: false },
        elements: { point: { radius: 2, hoverRadius: 5 } },
      },
    });
    return () => { if (chartInstance.current) chartInstance.current.destroy(); };
  }, [timelineView, t]);

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden p-6 border-l-4 border-green-500">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-green-700">{t('dashboard.sensorDataTimeline')}</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setTimelineView("weekly")}
            className={`px-4 py-2 text-sm rounded-lg transition ${timelineView === "weekly" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >{t('dashboard.weekly')}</button>
          <button
            onClick={() => setTimelineView("monthly")}
            className={`px-4 py-2 text-sm rounded-lg transition ${timelineView === "monthly" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >{t('dashboard.monthly')}</button>
        </div>
      </div>
      <div className="h-80"><canvas ref={chartRef}></canvas></div>
      <div className="mt-4 text-sm text-gray-500 text-center">
        Toggle parameters visibility by clicking on their names in the legend below the chart
      </div>
    </div>
  );
};

const Graph = ({ title, data, min, max }) => {
  const { t } = useTranslation(); // Use the t function
  const latestValue = data[data.length - 1];
  let status = t('dashboard.status.optimal');
  let statusColor = "#10B981";
  if (latestValue < min) { status = t('dashboard.status.low'); statusColor = "#F59E0B"; } 
  else if (latestValue > max) { status = t('dashboard.status.high'); statusColor = "#EF4444"; }

  const chartData = {
    labels: data.map((_, index) => `T-${data.length - index}`).reverse(),
    datasets: [
      {
        label: title,
        data: [...data].reverse(),
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointRadius: 3,
        pointBackgroundColor: "#3B82F6",
      },
      {
        label: "Min Range",
        data: Array(data.length).fill(min),
        borderColor: "#10B981",
        borderDash: [5, 5],
        borderWidth: 1,
        fill: false,
        pointRadius: 0,
      },
      {
        label: "Max Range",
        data: Array(data.length).fill(max),
        borderColor: "#EF4444",
        borderDash: [5, 5],
        borderWidth: 1,
        fill: false,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "rgba(17, 24, 39, 0.8)",
        titleColor: "#F3F4F6",
        bodyColor: "#F3F4F6",
        padding: 12,
        borderColor: "rgba(107, 114, 128, 0.3)",
        borderWidth: 1,
      },
    },
    scales: {
      y: { grid: { color: "rgba(107, 114, 128, 0.1)" }, ticks: { font: { size: 10 } } },
      x: { grid: { display: false }, ticks: { font: { size: 10 }, maxRotation: 0 } },
    },
  };

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden p-4 hover:shadow-xl transition duration-300 border-l-4 border-green-500">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <span className="text-2xl mr-2">{parameterIcons[title.toLowerCase().replace(' ', '_')] || '📊'}</span>
          <h3 className="text-lg font-semibold text-green-700">{title}</h3>
        </div>
        <div className="flex items-center">
          <span className="font-bold text-xl mr-2">{latestValue.toFixed(1)}</span>
          <div className={`px-2 py-1 rounded-full text-xs font-medium`} style={{backgroundColor: statusColor, color: 'white'}}>
            {status.toUpperCase()}
          </div>
        </div>
      </div>
      <div className="h-48"><Line data={chartData} options={options} /></div>
      <div className="flex justify-between mt-2 text-xs text-gray-500">
        <div>{t('dashboard.min')}: <span className="font-medium text-green-600">{min}</span></div>
        <div>{t('dashboard.optimalRange')}</div>
        <div>{t('dashboard.max')}: <span className="font-medium text-red-600">{max}</span></div>
      </div>
    </div>
  );
};

const ApiUnavailable = ({ onRetry }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden p-8 text-center border-l-4 border-amber-500">
      <div className="flex flex-col items-center">
        <span className="text-5xl mb-4">📡</span>
        <h3 className="text-xl font-semibold text-amber-700 mb-2">API Connection Unavailable</h3>
        <p className="text-gray-600 mb-6">Unable to connect to the sensor data API. Check your connection or server status.</p>
        <button 
          onClick={onRetry}
          className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors flex items-center"
        >
          <span className="mr-2">↻</span>
          Retry Connection
        </button>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const { t } = useTranslation(); // Use the t function
  const [sensorData, setSensorData] = useState([]);
  const [certification, setCertification] = useState("");
  const [certificationPercent, setCertificationPercent] = useState(0);
  const [validUntil, setValidUntil] = useState("");
  const [reason, setReason] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [apiAvailable, setApiAvailable] = useState(true);
  const [showDetailedGraphs, setShowDetailedGraphs] = useState(false);

  const fetchData = async () => {
    try {
      setRefreshing(true);
      const response = await axios.get(API_URL);
      
      setSensorData(response.data.sensor_history || []);
      setCertification(response.data.certification_status);
      setReason(response.data.certification_reason);
      setSuggestions(response.data.suggestions);
      
      // Set the valid until date if it exists in the API response
      if (response.data.valid_until) {
        setValidUntil(response.data.valid_until);
      }
      
      setCertificationPercent(response.data.certification_percent || (
        response.data.certification_status.includes("Full") ? 100 : 
        response.data.certification_status.includes("Intermediate") ? 70 : 40
      ));
      
      setLoading(false);
      setApiAvailable(true);
      setTimeout(() => setRefreshing(false), 500);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
      setRefreshing(false);
      setApiAvailable(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500"></div>
        <p className="mt-4 text-green-700">{t('dashboard.loading')}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50">
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl mr-3">🌾</span>
            <h1 className="text-xl font-bold text-green-700">{t('dashboard.title')}</h1>
          </div>
          <button 
            onClick={fetchData}
            className="bg-green-100 text-green-700 px-4 py-2 rounded-lg flex items-center hover:bg-green-200 transition"
          >
            <span className={`mr-2 ${refreshing ? 'animate-spin' : ''}`}>↻</span>
            {t('dashboard.refresh')}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <CertificationProgressBar 
              certification={certification} 
              certificationPercent={certificationPercent}
              validUntil={validUntil}
            />
          </div>
          <div className="lg:col-span-1">
            <CertificationDetails reason={reason} suggestions={suggestions} />  
          </div>
        </div>

        {apiAvailable ? (
          <>
            <div className="grid grid-cols-1 gap-6 mb-8">
              <TimelineGraph onShowDetailedGraphs={() => setShowDetailedGraphs(true)} />
            </div>

            {showDetailedGraphs && sensorData.length > 0 && (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-green-700">Detailed Parameter Graphs</h2>
                  <button 
                    onClick={() => setShowDetailedGraphs(false)}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition flex items-center"
                  >
                    <span className="mr-2">▲</span>
                    Hide Detailed Graphs
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {Object.keys(standardRanges).map((key) => (
                    <Graph
                      key={key}
                      title={formatParameterName(key)}
                      data={sensorData.map((d) => d[key])}
                      min={standardRanges[key].min}
                      max={standardRanges[key].max}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <ApiUnavailable onRetry={fetchData} />
        )}

        <footer className="mt-12 text-center text-green-700 text-sm bg-green-100 p-3 rounded-lg">
          <p>{t('dashboard.lastUpdated')} {new Date().toLocaleTimeString()}</p>
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
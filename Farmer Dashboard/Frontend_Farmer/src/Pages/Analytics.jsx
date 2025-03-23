// Team_35-AgriAuthentic/Farmer Dashboard/Frontend_Farmer/src/Pages/Analytics.jsx
import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Calendar, TrendingUp, Clock, Package, Droplet, Sun, Wind, Thermometer } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Analytics = () => {
  const { t } = useTranslation(); // Use the t function

  // Sample data - replace with your actual data
  const [revenueData, setRevenueData] = useState([
    { date: '3/12/2025', value: 3500 },
    { date: '3/13/2025', value: 3800 },
    { date: '3/14/2025', value: 2800 },
    { date: '3/15/2025', value: 3500 },
    { date: '3/16/2025', value: 3200 },
    { date: '3/17/2025', value: 3600 },
    { date: '3/18/2025', value: 3900 }
  ]);

  const [timeFrame, setTimeFrame] = useState(t('analytics.timeFrame.daily')); // Use translation for default value

  const [cropsData, setCropsData] = useState([
    { name: 'Wheat', yield: 45, growth: 8.3 },
    { name: 'Rice', yield: 38, growth: 12.5 },
    { name: 'Maize', yield: 32, growth: 5.7 },
    { name: 'Soybeans', yield: 28, growth: 15.2 }
  ]);

  const [weatherData, setWeatherData] = useState([
    { date: '3/18/2025', temp: 32, humidity: 65, rainfall: 0 },
    { date: '3/19/2025', temp: 35, humidity: 60, rainfall: 0 },
    { date: '3/20/2025', temp: 33, humidity: 58, rainfall: 0 },
    { date: '3/21/2025', temp: 30, humidity: 75, rainfall: 12 },
    { date: '3/22/2025', temp: 28, humidity: 80, rainfall: 15 }
  ]);

  // Animation for metrics on load
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{t('analytics.dashboardTitle')}</h1>
          <div className="bg-white rounded-lg shadow flex items-center p-2">
            <Calendar className="h-5 w-5 text-blue-500 mr-2" />
            <select
              className="outline-none text-gray-700 font-medium"
              value={timeFrame}
              onChange={(e) => setTimeFrame(e.target.value)}
            >
              <option>{t('analytics.timeFrame.daily')}</option>
              <option>{t('analytics.timeFrame.weekly')}</option>
              <option>{t('analytics.timeFrame.monthly')}</option>
              <option>{t('analytics.timeFrame.yearly')}</option>
            </select>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className={`bg-white rounded-lg shadow p-4 border-l-4 border-blue-500 transition-all duration-500 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '0ms' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{t('analytics.metrics.totalEarnings')}</p>
                <h3 className="text-2xl font-bold text-gray-800">₹4,50,000.00</h3>
              </div>
              <div className="bg-blue-100 p-2 rounded-full">
                <span className="text-blue-500 text-xl">₹</span>
              </div>
            </div>
          </div>

          <div className={`bg-white rounded-lg shadow p-4 border-l-4 border-yellow-500 transition-all duration-500 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '100ms' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{t('analytics.metrics.pendingPayouts')}</p>
                <h3 className="text-2xl font-bold text-gray-800">₹25,000.00</h3>
              </div>
              <div className="bg-yellow-100 p-2 rounded-full">
                <Clock className="h-5 w-5 text-yellow-500" />
              </div>
            </div>
          </div>

          <div className={`bg-white rounded-lg shadow p-4 border-l-4 border-green-500 transition-all duration-500 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{t('analytics.metrics.cropYieldGrowth')}</p>
                <h3 className="text-2xl font-bold text-green-500">+12.5%</h3>
              </div>
              <div className="bg-green-100 p-2 rounded-full">
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </div>

          <div className={`bg-white rounded-lg shadow p-4 border-l-4 border-purple-500 transition-all duration-500 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{t('analytics.metrics.totalOrders')}</p>
                <h3 className="text-2xl font-bold text-gray-800">450</h3>
              </div>
              <div className="bg-purple-100 p-2 rounded-full">
                <Package className="h-5 w-5 text-purple-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Overview Graph */}
        <div className={`bg-white rounded-lg shadow p-4 mb-6 transition-all duration-500 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800">{t('analytics.revenueOverview')}</h2>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" />
                <YAxis
                  domain={[0, 'dataMax + 500']}
                  tickFormatter={(value) => `₹${value}`}
                />
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <Tooltip
                  formatter={(value) => [`₹${value}`, 'Revenue']}
                  labelFormatter={(label) => `Date: ${label}`}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Weather Forecast */}
        <div className={`bg-white rounded-lg shadow p-4 transition-all duration-500 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800">{t('analytics.weatherForecast')}</h2>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {weatherData.map((day, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-3 text-center">
                <div className="text-sm text-gray-600">{day.date.split('/')[1]}/{day.date.split('/')[0]}</div>
                <div className="my-2">
                  {day.rainfall > 0 ? (
                    <Droplet className="h-8 w-8 mx-auto text-blue-500" />
                  ) : (
                    <Sun className="h-8 w-8 mx-auto text-yellow-500" />
                  )}
                </div>
                <div className="flex items-center justify-center">
                  <Thermometer className="h-4 w-4 text-red-500 mr-1" />
                  <span className="text-sm font-medium">{day.temp}°C</span>
                </div>
                <div className="flex items-center justify-center mt-1">
                  <Droplet className="h-4 w-4 text-blue-400 mr-1" />
                  <span className="text-sm">{day.humidity}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Crop Growth Trends */}
        <div className={`bg-white rounded-lg shadow p-4 mt-6 transition-all duration-500 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '700ms' }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800">{t('analytics.cropGrowthTrends')}</h2>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={cropsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `${value}%`} />
                <Tooltip formatter={(value) => [`${value}%`, 'Growth Rate']} />
                <Line
                  type="monotone"
                  dataKey="growth"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ r: 5 }}
                  activeDot={{ r: 8 }}
                  animationDuration={1500}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
import React, { useEffect, useState } from 'react';
import { Calendar, Clock, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import axios from 'axios';
import { ScaleLoader } from "react-spinners"

const FarmingNewsApp = () => {
  // Real state for news data
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // State for expanded cards
  const [expandedCards, setExpandedCards] = useState({});
  // State for filters
  const [activeFilter, setActiveFilter] = useState('all');
  // State for search
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:4009/api/news/agriculture-news');
        
        // If API fails to return data, generate random mock data
        if (!response.data || response.data.length === 0) {
          setNewsData(generateRandomNews(12));
        } else {
          setNewsData(response.data);
        }
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch news:", err);
        setError("Couldn't connect to news service. Showing sample data instead.");
        // Generate random news as fallback
        setNewsData(generateRandomNews(12));
        setLoading(false);
      }
    };

    fetchData();
    
    // Refresh data every 30 minutes
    const refreshInterval = setInterval(fetchData, 30 * 60 * 1000);
    
    return () => clearInterval(refreshInterval);
  }, []);

  // Generate random news for fallback
  const generateRandomNews = (count) => {
    const sources = [
      { id: 'farming-today', name: 'Farming Today' },
      { id: 'ag-weekly', name: 'Ag Weekly' },
      { id: 'rural-gazette', name: 'Rural Gazette' },
      { id: 'crop-science', name: 'Crop Science' },
      { id: 'farm-journal', name: 'Farm Journal' }
    ];
    
    const headlines = [
      "Drought Conditions Worsen Across Midwest Corn Belt",
      "New Precision Farming Tool Reduces Fertilizer Use by 30%",
      "EU-US Trade Deal Could Boost Agricultural Exports",
      "Vertical Farming Startup Secures $40M in Funding",
      "Climate Change Pushing Apple Growing Regions Northward",
      "Soybean Futures Rally on Strong Export Demand",
      "Farm Labor Shortage Drives Adoption of Robotic Harvesters",
      "Organic Certification Process to Be Streamlined Next Year",
      "Satellite Data Helps Farmers Predict Irrigation Needs",
      "New Wheat Variety Shows Resistance to Common Rust",
      "Heavy Rains Delay Planting Season in Southern States",
      "Urban Farming Initiative Connects City Residents with Food Sources",
      "Livestock Producers Face Rising Feed Costs",
      "Sensor Technology Enables Soil Health Monitoring in Real-Time",
      "Agricultural Subsidies Under Review in Latest Policy Shift"
    ];
    
    const authors = [
      "Sarah Johnson", "Mike Peterson", "Lisa Chen", "Robert Garcia",
      "Emily Williams", null, "David Kim", "Jennifer Taylor", null
    ];
    
    const descriptions = [
      "Recent weather patterns have raised concerns among agricultural experts about the potential impact on this year's harvest season.",
      "Innovative approaches to sustainable farming practices are gaining traction as farmers look to reduce their environmental footprint.",
      "Market analysts predict significant shifts in commodity prices following recent policy announcements and trade negotiations.",
      "Technology adoption in rural communities continues to transform traditional farming methods with promising results for productivity.",
      "Research indicates changing climate conditions may significantly alter growing regions for key crops within the next decade.",
      "Labor shortages and rising costs challenge farmers to rethink operational strategies and explore automation options.",
      "Consumers show increasing interest in food origin and production methods, creating new market opportunities for transparent producers.",
      "Industry experts gather to discuss emerging challenges and innovative solutions at the annual agricultural summit.",
      "New regulations aim to balance environmental protection with the economic needs of farming communities across the country."
    ];
    
    const content = [
      "Agricultural experts are closely monitoring developing conditions across major farming regions. Initial assessments suggest varying impacts depending on local climate factors and implemented mitigation strategies. Industry representatives emphasize the importance of adaptive approaches and continued investment in resilient farming systems.",
      "The latest research findings highlight potential pathways for sustainable agricultural practices without compromising productivity. Farmers implementing these approaches report not only environmental benefits but also cost savings and improved market positioning for their products. Education and knowledge sharing remain crucial for wider adoption.",
      "Economic analysis of current market trends indicates several factors influencing agricultural commodity prices. Trade relations, changing consumer preferences, and production challenges all contribute to a complex landscape for producers. Strategic planning and diversification strategies may help buffer against market volatility.",
      "Technology integration continues transforming agricultural operations from small family farms to large industrial operations. The accessibility of these technologies remains a concern for smaller producers, while success stories demonstrate significant return on investment for early adopters in various sectors."
    ];

    const randomNews = [];
    const now = new Date();
    
    for (let i = 0; i < count; i++) {
      // Generate random date within last 14 days
      const randomDaysAgo = Math.floor(Math.random() * 14);
      const publishDate = new Date(now);
      publishDate.setDate(publishDate.getDate() - randomDaysAgo);
      
      // Random elements
      const source = sources[Math.floor(Math.random() * sources.length)];
      const title = headlines[Math.floor(Math.random() * headlines.length)];
      const author = authors[Math.floor(Math.random() * authors.length)];
      const description = descriptions[Math.floor(Math.random() * descriptions.length)];
      const articleContent = content[Math.floor(Math.random() * content.length)];
      
      // Construct news object
      randomNews.push({
        source: source,
        author: author,
        title: `${title} ${i > 0 ? `(${i})` : ''}`,
        description: description,
        content: articleContent,
        url: `https://example.com/news/${i}-${title.toLowerCase().replace(/\s+/g, '-')}`,
        urlToImage: null, // Using placeholder instead
        publishedAt: publishDate.toISOString()
      });
    }
    
    // Sort by publish date (newest first)
    return randomNews.sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  };

  // Toggle expand/collapse for a specific news card
  const toggleExpand = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Filter news based on selected category and search term
  const getFilteredNews = () => {
    if (!newsData || !newsData.length) return [];
    
    let filtered = [...newsData];
    
    // Apply category filter
    if (activeFilter === 'climate') {
      filtered = filtered.filter(news => {
        const climateTerms = ['climate', 'weather', 'drought', 'rain', 'temperature', 'forecast'];
        const textToSearch = `${news.title} ${news.description || ''} ${news.content || ''}`.toLowerCase();
        
        return climateTerms.some(term => textToSearch.includes(term));
      });
    } else if (activeFilter === 'trade') {
      filtered = filtered.filter(news => {
        const tradeTerms = ['trade', 'tariff', 'export', 'import', 'market', 'price', 'deal', 'economic'];
        const textToSearch = `${news.title} ${news.description || ''} ${news.content || ''}`.toLowerCase();
        
        return tradeTerms.some(term => textToSearch.includes(term));
      });
    } else if (activeFilter === 'technology') {
      filtered = filtered.filter(news => {
        const techTerms = ['tech', 'technology', 'satellite', 'digital', 'innovation', 'sensor', 'robotic', 'precision'];
        const textToSearch = `${news.title} ${news.description || ''} ${news.content || ''}`.toLowerCase();
        
        return techTerms.some(term => textToSearch.includes(term));
      });
    }
    
    // Apply search filter if user has entered something
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(news =>
        (news.title?.toLowerCase().includes(term)) ||
        (news.description?.toLowerCase().includes(term)) ||
        (news.content?.toLowerCase().includes(term)) ||
        (news.author?.toLowerCase().includes(term)) ||
        (news.source?.name?.toLowerCase().includes(term))
      );
    }
    
    return filtered;
  };

  const filteredNews = getFilteredNews();

  // Format current date for header
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Component for single news card
  const NewsCard = ({ news, expanded, toggleExpand }) => {
    // Format the publish date
    const formatDate = (dateString) => {
      try {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric' 
        });
      } catch (e) {
        return "Unknown date";
      }
    };
  
    // Truncate the description for compact view
    const truncateText = (text, maxLength) => {
      if (!text) return '';
      return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };
  
    // Generate placeholder if no image available
    const imageSrc = news.urlToImage || `/api/placeholder/${300 + Math.floor(Math.random() * 200)}/${200 + Math.floor(Math.random() * 100)}`;
  
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100">
        <div className="relative">
          <img 
            src={imageSrc}
            alt={news.title} 
            className="w-full h-48 object-cover"
          />
          {news.source?.name && (
            <div className="absolute top-0 right-0 bg-green-600 text-white px-2 py-1 m-2 rounded-md text-xs font-medium">
              {news.source.name}
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{news.title}</h3>
          
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <Calendar size={14} className="mr-1" />
            <span>{formatDate(news.publishedAt)}</span>
            {news.author && (
              <>
                <span className="mx-2">•</span>
                <span>{news.author}</span>
              </>
            )}
          </div>
          
          <p className="text-gray-600 mb-4">
            {expanded ? news.content || news.description : truncateText(news.description || '', 120)}
          </p>
          
          <div className="flex justify-between items-center">
            <button 
              onClick={toggleExpand}
              className="flex items-center text-green-600 hover:text-green-800 transition-colors"
            >
              {expanded ? (
                <>
                  <ChevronUp size={16} className="mr-1" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown size={16} className="mr-1" />
                  Read More
                </>
              )}
            </button>
            
            <a 
              href={news.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              Visit Source <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        </div>
  
        {expanded && (
          <div className="px-4 pb-4">
            <div className="border-t border-gray-200 pt-4">
              <h4 className="font-semibold text-gray-800 mb-2">Key Details</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <div className="bg-gray-50 p-2 rounded">
                  <span className="font-medium">Source:</span> {news.source?.name || "Unknown source"}
                </div>
                {news.author && (
                  <div className="bg-gray-50 p-2 rounded">
                    <span className="font-medium">Author:</span> {news.author}
                  </div>
                )}
                <div className="bg-gray-50 p-2 rounded">
                  <span className="font-medium">Published:</span> {formatDate(news.publishedAt)}
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <span className="font-medium">Category:</span> {
                    activeFilter === 'climate' ? 'Climate & Weather' :
                    activeFilter === 'trade' ? 'Trade & Policy' :
                    activeFilter === 'technology' ? 'Agricultural Tech' :
                    'General Agriculture'
                  }
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-700 text-white py-4 shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">FarmFeed</h1>
              <p className="text-green-100">{currentDate}</p>
            </div>
            <div className="mt-4 md:mt-0 relative">
              <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 rounded-full w-full md:w-64 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Filter Categories */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === 'all'
                ? 'bg-green-600 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            All News
          </button>
          <button
            onClick={() => setActiveFilter('climate')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === 'climate'
                ? 'bg-green-600 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Climate & Weather
          </button>
          <button
            onClick={() => setActiveFilter('trade')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === 'trade'
                ? 'bg-green-600 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Trade & Policy
          </button>
          <button
            onClick={() => setActiveFilter('technology')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === 'technology'
                ? 'bg-green-600 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Agricultural Tech
          </button>
        </div>

        {/* Loading state */}
        {loading && (
          <div className=' flex items-center justify-center'>
            <ScaleLoader color='lightgreen'/>
          </div>
        )}
        
        {/* Error message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
            <p>{error}</p>
          </div>
        )}

        {/* Featured News */}
        {!loading && filteredNews.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-6 bg-green-600 inline-block mr-2"></span>
              Today's Highlight
            </h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={filteredNews[0].urlToImage || '/api/placeholder/600/400'} 
                    alt={filteredNews[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-xs font-medium text-green-600 bg-green-100 rounded-full px-3 py-1">
                      {filteredNews[0].source?.name || "Agricultural News"}
                    </span>
                    <span className="text-gray-500 text-sm ml-2 flex items-center">
                      <Clock size={14} className="mr-1" />
                      {new Date(filteredNews[0].publishedAt).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{filteredNews[0].title}</h3>
                  <p className="text-gray-600 mb-6">
                    {filteredNews[0].description}
                  </p>
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => toggleExpand(`featured-${filteredNews[0].url}`)}
                      className="text-green-600 font-medium flex items-center hover:text-green-800 transition-colors"
                    >
                      {expandedCards[`featured-${filteredNews[0].url}`] ? (
                        <>
                          <ChevronUp size={16} className="mr-1" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown size={16} className="mr-1" />
                          Read More
                        </>
                      )}
                    </button>
                    <a
                      href={filteredNews[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700 transition-colors flex items-center"
                    >
                      Read Full Article <ExternalLink size={14} className="ml-2" />
                    </a>
                  </div>
                  
                  {expandedCards[`featured-${filteredNews[0].url}`] && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-gray-700">
                        {filteredNews[0].content || "Full content not available. Visit the publisher's website for the complete story."}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-2 h-6 bg-green-600 inline-block mr-2"></span>
            Latest Farming News
            {activeFilter !== 'all' && !loading && (
              <span className="ml-2 text-sm font-normal text-gray-500">
                Filtered by {activeFilter === 'climate' ? 'Climate & Weather' : 
                  activeFilter === 'trade' ? 'Trade & Policy' : 'Agricultural Tech'}
              </span>
            )}
          </h2>
          
          {!loading && filteredNews.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-2">No news found</h3>
              <p className="text-gray-600">Try adjusting your search or filters to find relevant farming news.</p>
              <button 
                onClick={() => {
                  setActiveFilter('all');
                  setSearchTerm('');
                }}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            !loading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNews.slice(1).map((news, index) => (
                  <NewsCard 
                    key={`news-${index}-${news.url}`}
                    news={news}
                    expanded={!!expandedCards[news.url]}
                    toggleExpand={() => toggleExpand(news.url)}
                  />
                ))}
              </div>
            )
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">FarmFeed</h2>
              <p className="text-green-200">Your trusted source for agricultural news</p>
            </div>
            <div className="text-center md:text-right">
              <p>© {new Date().getFullYear()} FarmFeed. All rights reserved.</p>
              <p className="text-green-200 text-sm mt-1">Updates every 30 minutes with the latest farming news</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FarmingNewsApp;
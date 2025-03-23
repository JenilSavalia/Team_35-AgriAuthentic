// Ai-Chatpot/chatbot/src/ChatModal.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, History, Trash, RefreshCcw, Leaf, Globe } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const API_URL = "https://chat-bot-hackathon-server.onrender.com"; // Backend deployed link
const USER_ID = "660123456789123456789123";

export const ChatModal = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your organic farming assistant. How can I help you with organic products, farming practices, or IoT-based verification today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [language, setLanguage] = useState('en'); // Default language is English
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      fetchChatHistory();
    }
    scrollToBottom();
  }, [isOpen, messages]);

  const fetchChatHistory = async () => {
    try {
      const response = await fetch(`${API_URL}/chatbot/history`);
      const data = await response.json();
      if (data.length > 0 && showHistory) {
        setMessages(data.flatMap(msg => [
          { text: msg.question, isBot: false },
          { text: msg.response, isBot: true }
        ]));
      }
    } catch (error) {
      console.error('Error fetching chat history:', error);
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setIsLoading(true);

    try {
      // Translate the user's message to English (if necessary) before processing
      const translatedMessage = await translateText(userMessage, 'en', language);

      // Check if the user is asking to search for a product
      if (translatedMessage.toLowerCase().includes("search for") || translatedMessage.toLowerCase().includes("find")) {
        const query = translatedMessage.replace(/search for|find/gi, "").trim(); // Extract the search query
        const response = await fetch(`${API_URL}/search/products?query=${encodeURIComponent(query)}`);
        const data = await response.json();

        if (data.length > 0) {
          // Display the search results
          const productList = data.map(product => `- **${product.name}**: ${product.price} (${product.description})`).join("\n");
          const botResponse = `Here are the products I found for "${query}":\n${productList}`;
          const translatedResponse = await translateText(botResponse, language, 'en');
          setMessages(prev => [...prev, { text: translatedResponse, isBot: true }]);
        } else {
          const botResponse = `No products found for "${query}".`;
          const translatedResponse = await translateText(botResponse, language, 'en');
          setMessages(prev => [...prev, { text: translatedResponse, isBot: true }]);
        }
      } else {
        // Handle normal chatbot queries
        const response = await fetch(`${API_URL}/chatbot/query`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question: translatedMessage })
        });
        const data = await response.json();
        const translatedResponse = await translateText(data.response, language, 'en');
        setMessages(prev => [...prev, { text: translatedResponse, isBot: true }]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { text: "Sorry, something went wrong.", isBot: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const translateText = async (text, targetLang, sourceLang = 'en') => {
    if (targetLang === 'en') return text; // No translation needed for English

    try {
      const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`);
      const data = await response.json();
      return data.responseData.translatedText || text; // Fallback to original text if translation fails
    } catch (error) {
      console.error('Error translating text:', error);
      return text; // Fallback to original text
    }
  };

  const handleNewChat = () => {
    setMessages([{ text: "Hello! I'm your organic farming assistant. How can I help you with organic products, farming practices, or IoT-based verification today?", isBot: true }]);
    setShowHistory(false);
  };

  const handleEndChat = async () => {
    try {
      await fetch(`${API_URL}/chatbot/history`, { method: 'DELETE' });
      handleNewChat();
    } catch (error) {
      console.error('Error ending chat:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 w-[500px] h-full bg-green-50 shadow-lg flex flex-col z-[9999] border-l border-green-200 rounded-l-lg"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 flex justify-between items-center rounded-tl-lg">
            <div className="flex items-center gap-3">
              <div className="bg-green-500/10 p-2 rounded-lg backdrop-blur-sm">
                <Leaf className="text-green-100" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-green-50">Organic Farming Assistant</h2>
                <p className="text-sm text-green-100/80">Promoting sustainable farming, one chat at a time</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-green-50 hover:bg-green-500/20 rounded-full transition-colors"
              aria-label="Close chat"
            >
              <X />
            </button>
          </div>

          {/* Controls */}
          <div className="p-3 flex gap-2 bg-green-100 border-b border-green-200">
            <button
              onClick={handleNewChat}
              className="flex items-center gap-1 px-3 py-1.5 bg-green-600 text-green-50 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
            >
              <RefreshCcw className="w-4 h-4" /> New Chat
            </button>
            <button
              onClick={handleEndChat}
              className="flex items-center gap-1 px-3 py-1.5 bg-red-600 text-red-50 rounded-full text-sm font-medium hover:bg-red-700 transition-colors"
            >
              <Trash className="w-4 h-4" /> End Chat
            </button>
            <button
              onClick={() => { setShowHistory(!showHistory); fetchChatHistory(); }}
              className="flex items-center gap-1 px-3 py-1.5 bg-green-500 text-green-50 rounded-full text-sm font-medium hover:bg-green-600 transition-colors"
            >
              <History className="w-4 h-4" /> {showHistory ? "Hide History" : "History"}
            </button>
            <div className="ml-auto flex items-center gap-2">
              <Globe className="text-green-600" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="p-1 rounded border border-green-300 bg-white text-green-700 text-sm"
              >
                <option value="en">English</option>
                <option value="gu">Gujarati</option>
                <option value="hi">Hindi</option>
              </select>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 bg-green-50">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex mb-4 ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-lg text-sm ${
                    message.isBot
                      ? 'bg-white text-green-800 border border-green-200 rounded-bl-none'
                      : 'bg-green-600 text-green-50 rounded-br-none'
                  }`}
                >
                  <ReactMarkdown>{message.text}</ReactMarkdown>
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <div className="flex justify-center gap-2 p-4">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-green-600 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.2 }}
                  />
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-green-100 border-t border-green-200">
            <div className="flex gap-2 items-center bg-white rounded-lg p-2 border border-green-200">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about organic farming or products..."
                disabled={isLoading}
                className="flex-1 p-2 bg-transparent text-green-800 placeholder-green-400 focus:outline-none"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="p-2 bg-green-600 text-green-50 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatModal;
// Ai-Chatpot/chatbot/src/FloatingChatButton.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { CloudRain, MessageCircle } from 'lucide-react';
import './ChatBot.css'; // Keep this since styling is here

export const FloatingChatButton = ({ onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="floating-chat-button"
      aria-label="Chat with Natural Farming Assistant"
    >
      <CloudRain color="#ffffff" />
    </motion.button>
  );
};

export default FloatingChatButton;
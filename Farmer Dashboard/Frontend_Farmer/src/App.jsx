<<<<<<< HEAD
import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Marketplace from './Pages/FarmerMarketplace/Marketplace'
import Products from './Pages/Products&Orders/Products'
import Analytics from './Pages/Analytics'
import Profile from './Pages/Profile'
import Products_Layout from './Pages/Products&Orders/Products_&_Orders'
import Orders from './Pages/Products&Orders/Orders'
import ProductDetails from './Pages/Products&Orders/Crop_Details'
import FarmerDetails from './Pages/FarmerMarketplace/FarmerDetails'
import FarmingNews from './Pages/FarmerMarketplace/FarmingNews'
import MarketPrices from './Pages/FarmerMarketplace/MarketPrices'
import HomePage from './Pages/HomePage'
import FarmerProfileSetup from './Components/ProfileSetup'
import FarmingNewsDashboard from './Pages/FarmerMarketplace/FarmingNews'
import ChatModal from './Components/AiChatBot/ChatModel'
import FloatingChatButton from './Components/AiChatBot/FloatingChatButton'

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatButtonClick = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };
=======
import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next'; // Import I18nextProvider
import i18n from './i18n'; // Import i18n configuration
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Marketplace from './Pages/FarmerMarketplace/Marketplace';
import Products from './Pages/Products&Orders/Products';
import Analytics from './Pages/Analytics';
import Profile from './Pages/Profile';
import Products_Layout from './Pages/Products&Orders/Products_&_Orders';
import Orders from './Pages/Products&Orders/Orders';
import ProductDetails from './Pages/Products&Orders/Crop_Details';
import FarmerDetails from './Pages/FarmerMarketplace/FarmerDetails';
import FarmingNews from './Pages/FarmerMarketplace/FarmingNews';
import MarketPrices from './Pages/FarmerMarketplace/MarketPrices';
import HomePage from './Pages/HomePage';
import FarmerProfileSetup from './Components/ProfileSetup';

function App() {
>>>>>>> 98ad8bd69748e8f5bbbeb5b377b4fe7b9936b321
  return (
    <I18nextProvider i18n={i18n}> {/* Wrap the app with I18nextProvider */}
      <BrowserRouter>
        {location.pathname !== '/' && <Navbar />}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products_Layout />}>
              <Route index element={<Navigate to="Crops" replace />} />
              <Route path="Crops" element={<Products />} />
              <Route path="Orders" element={<Orders />} />
              <Route path="details/:id" element={<ProductDetails />} />
            </Route>
            <Route path="/marketplace" element={<Marketplace />}>
              <Route index element={<Navigate to="farmers" replace />} />
              <Route path="farmers" element={<FarmerDetails />} />
              <Route path="market" element={<MarketPrices />} />
              <Route path="news" element={<FarmingNews />} />
            </Route>
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/profile" element={<Profile />} />
<<<<<<< HEAD
            <Route path='/profile-setup' element={<FarmerProfileSetup />} />
=======
            <Route path="/profile-setup" element={<FarmerProfileSetup />} />
>>>>>>> 98ad8bd69748e8f5bbbeb5b377b4fe7b9936b321
          </Routes>
        </main>
        {location.pathname !== '/' &&
          <div className="app">
            <FloatingChatButton onClick={handleChatButtonClick} />
            <ChatModal isOpen={isChatOpen} onClose={handleCloseChat} />
          </div>}

      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
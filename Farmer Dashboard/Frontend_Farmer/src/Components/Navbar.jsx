// Team_35-AgriAuthentic/Farmer Dashboard/Frontend_Farmer/src/Components/Navbar.jsx
// Farmer Dashboard/Frontend_Farmer/src/Components/Navbar.jsx
import { Leaf } from 'lucide-react';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function Navbar() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const savedLanguage = localStorage.getItem("language");
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem("language", selectedLanguage);
    };

    return (
        <div className='flex items-center justify-between mx-2'>
            <div className="flex items-center gap-1">
                <Leaf color="#2ba829" size={22} />
                <h1 className='text-green-600 font-bold text-2xl text-center items-center flex pb-1.5'>
                    AgriAuthentic
                </h1>
            </div>
            <div className="p-4 flex items-center space-x-6">
                <NavLink to="/dashboard" className={({ isActive }) => `px-4 py-2 rounded-lg transition ${isActive ? "text-green-700 font-semibold" : "text-black font-semibold hover:text-gray-600"}`}>
                    {t('AI Dashboard')}
                </NavLink>
                <NavLink to="/products" className={({ isActive }) => `px-4 py-2 rounded-lg transition ${isActive ? "text-green-700 font-semibold" : "text-black font-semibold hover:text-gray-600"}`}>
                    {t('Products & Orders')}
                </NavLink>
                <NavLink to="/marketplace" className={({ isActive }) => `px-4 py-2 rounded-lg transition-all duration-500 ${isActive ? "text-green-700 font-semibold" : "text-black font-semibold hover:text-gray-600"}`}>
                    {t('Marketplace')}
                </NavLink>
                <NavLink to="/analytics" className={({ isActive }) => `px-4 py-2 rounded-lg transition ${isActive ? "text-green-700 font-semibold" : "text-black font-semibold hover:text-gray-600"}`}>
                    {t('Analytics')}
                </NavLink>
                <NavLink to="/profile" className={({ isActive }) => `px-4 py-2 rounded-lg transition ${isActive ? "text-green-700 font-semibold" : "text-black font-semibold hover:text-gray-600"}`}>
                    {t('Profile')}
                </NavLink>
            </div>
            <div>
                <select 
                    className="border border-gray-300 rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" 
                    onChange={handleLanguageChange}
                    value={i18n.language}
                >
                    <option value="en">English</option>
                    <option value="hi">हिन्दी</option>
                    <option value="gu">ગુજરાતી</option>
                </select>
            </div>
        </div>
    );
}

export default Navbar;

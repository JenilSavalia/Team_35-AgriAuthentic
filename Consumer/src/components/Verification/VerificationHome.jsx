// Team_35-AgriAuthentic/Consumer/src/components/Verification/VerificationHome.jsx
// Team_35-AgriAuthentic/Consumer/src/components/Verification/ProductVerification.jsx
// Team_35-AgriAuthentic/Verification/vite-project/src/Components/ProductVerification.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Leaf, Tractor, Award } from "lucide-react";
import ProductJourney from "./ProductJourney";
import FarmDetails from "./FarmDetails";
import Certification from "./Certification";
import MainCompo from "./MainCompo";
import NavbarMarket from '../../Pages/Header/NavbarMarket';


const VerificationHome = () => {
  const [activeTab, setActiveTab] = useState("journey");
  const navigate = useNavigate();


  return (
    <div><NavbarMarket />
    <div className="bg-[#ECFDF1] min-h-screen flex flex-col items-center">
      <MainCompo />
      <div className="flex mt-6 bg-gray-100 p-2 rounded-lg  w-[815px] justify-between">
        <button
          className={`flex items-center h-[35px] px-13 py-3 rounded-md transition-all text-md font-medium ${activeTab === "journey"
              ? "bg-white shadow text-black"
              : "text-gray-500"
            }`}
          onClick={() => setActiveTab("journey")}
        >
          <Leaf className="w-5 h-5 mr-2" /> Product Journey
        </button>

        <button
          className={`flex items-center h-[35px] px-16 py-3 rounded-md transition-all text-md font-medium ${activeTab === "farm"
              ? "bg-white shadow text-black"
              : "text-gray-500"
            }`}
          onClick={() => setActiveTab("farm")}
        >
          <Tractor className="w-5 h-5 mr-2" /> Farm Details
        </button>

        <button
          className={`flex items-center h-[35px] px-18 py-3 rounded-md transition-all text-md font-medium ${activeTab === "certification"
              ? "bg-white shadow text-black"
              : "text-gray-500"
            }`}
          onClick={() => setActiveTab("certification")}
        >
          <Award className="w-5 h-5 mr-2" /> Certificates
        </button>
      </div>

      {/* Page Content */}
      <div className="mt-6  w-[815px] pt-8 pr-8 pl-8 pb-5  bg-white rounded-lg border-[0.2px] border-[rgba(0,0,0,0.1)]">
        {activeTab === "journey" && <ProductJourney />}
        {activeTab === "farm" && <FarmDetails />}
        {activeTab === "certification" && <Certification />}
      </div>
      <button
        onClick={() => navigate("/shop/verify")}
        className="mt-6 bg-white text-green-700 font-semibold px-6 py-3 rounded-lg shadow-md border border-green-500 hover:bg-green-100 transition mb-6"
      >
        Verify Another Product
      </button>
    </div>
    </div>
  );
};

export default VerificationHome;

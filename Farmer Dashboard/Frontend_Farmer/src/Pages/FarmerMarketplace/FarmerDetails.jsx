import React, { useEffect, useState } from 'react';
import { PhoneCall, Info, MapPin, Clock, Leaf } from 'lucide-react';
import axios from 'axios';

function FarmerDetails() {
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFarmers = async () => {
      try {
        const response = await axios.get('https://agriauthenic-poc-backend.onrender.com/farmer');
        setFarmers(response.data);
      } catch (error) {
        console.error('Error fetching farmer data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFarmers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-green-50">
        <div className="p-6 rounded-lg bg-white shadow-lg">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-t-4 border-green-500 border-solid rounded-full animate-spin"></div>
            <span className="mt-4 text-base font-medium text-green-700">Loading marketplace data...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50">
      {/* Header Section */}
      <div className="bg-green-800 py-12 mb-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Farmer's Marketplace</h1>
            <p className="text-green-200 text-lg">Connect with farmers & support sustainable agriculture</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {farmers.length > 0 ? (
            farmers.map((farmer) => (
              <div key={farmer.id} className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                {/* Farmer Card Header */}
                <div className="bg-green-700 px-5 py-4 flex items-center">
                  <div className="bg-white p-2 rounded-full shadow-md mr-3">
                    <Leaf className="text-green-600" size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{farmer.name}</h3>
                    <p className="text-green-200 text-sm">{farmer.farmName}</p>
                  </div>
                </div>

                {/* Farmer Card Body */}
                <div className="p-5">
                  {/* Farm Location */}
                  <div className="flex items-start mb-4">
                    <MapPin size={18} className="text-green-600 mr-3 mt-1" />
                    <div>
                      {farmer.farmAddress.map((add) => (
                        <p key={add._id} className="text-green-700 text-sm">
                          {add.address}, {add.city}, {add.state}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="flex items-center mb-4">
                    <Clock size={18} className="text-green-600 mr-3" />
                    <p className="text-green-700 text-sm">
                      <span className="font-medium">Experience:</span> {farmer.experience} years
                    </p>
                  </div>

                  {/* Specialization Tags */}
                  <div className="mb-5 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Organic</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Sustainable</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Local</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-6">
                    <button className="flex items-center justify-center gap-2 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-all duration-200 flex-1 text-sm">
                      <Info size={16} /> Details
                    </button>
                    
                    <a
                      href={`tel:${farmer.phone}`}
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-white text-green-700 rounded-lg border border-green-300 hover:bg-green-100 transition-all duration-200 flex-1 text-sm"
                    >
                      <PhoneCall size={16} /> Contact
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-16">
              <div className="bg-white rounded-lg shadow-md p-8 max-w-lg mx-auto">
                <MapPin size={32} className="text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-green-800 mb-2">No Farmers Available</h3>
                <p className="text-green-600 text-sm">We're expanding our network. Check back soon.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FarmerDetails;

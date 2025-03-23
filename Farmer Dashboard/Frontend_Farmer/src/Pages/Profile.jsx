import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next"; // Import useTranslation
import {
  MapPin, Phone, Mail, Wheat, Map, Building2, Globe, Crown, Tractor, Sprout, Car, Navigation
} from 'lucide-react';
import axios from 'axios';

function Profile() {
  const { t } = useTranslation(); // Use the t function
  const [userProfileData, setUserProfileData] = useState({});

  const id = localStorage.getItem('googleId');

  useEffect(() => {
    const fetchProfileData = async () => {
      const response = await axios.get(`https://agriauthenic-poc-backend.onrender.com/farmer/${id}`);
      setUserProfileData(response.data.data);
    };

    fetchProfileData();
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Hero Banner */}
      <div className="relative h-64 bg-gradient-to-r from-green-600 to-emerald-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Farm background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Profile Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 -mt-32 max-w-7xl mx-auto">
        <div className="relative">
          {/* Profile Header */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="sm:flex sm:items-center sm:justify-between p-8">
              <div className="sm:flex sm:space-x-8 items-center">
                <div className="relative mb-4 sm:mb-0">
                  <img
                    src={userProfileData.imageLink}
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                  />
                  {/* Pro Badge */}
                  <div className="absolute -right-2 -top-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full p-2 shadow-lg">
                    <Crown className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-4">
                    <h1 className="text-3xl font-bold text-gray-900">{userProfileData.farmerName}</h1>
                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800">
                      {userProfileData.subscriptionModel} {t('profile.proBadge')}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{userProfileData?.farmerAddress?.address}</span>
                    <span>{userProfileData?.farmerAddress?.city}</span>
                    <span>{userProfileData?.farmerAddress?.state}</span>
                    <span>{userProfileData?.farmerAddress?.country}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Overview */}
            <div className="border-t border-gray-100">
              <dl className="grid grid-cols-1 sm:grid-cols-3">
                <div className="px-6 py-4 sm:border-r border-gray-100">
                  <dt className="text-sm font-medium text-gray-500">{t('profile.farmSize')}</dt>
                  <dd className="mt-1 text-2xl font-semibold text-green-600">{userProfileData.farmSizes} {t('profile.acres')}</dd>
                </div>
                <div className="px-6 py-4 sm:border-r border-gray-100">
                  <dt className="text-sm font-medium text-gray-500">{t('profile.activeFarms')}</dt>
                  <dd className="mt-1 text-2xl font-semibold text-green-600">1</dd>
                </div>
                <div className="px-6 py-4">
                  <dt className="text-sm font-medium text-gray-500">{t('profile.primaryCrops')}</dt>
                  <dd className="mt-1 text-2xl font-semibold text-green-600">Wheat</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="ml-4 text-xl font-semibold text-gray-900">{t('profile.contactDetails')}</h2>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-gray-400 mt-1" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">{t('profile.phone')}</p>
                      <p className="text-sm text-gray-600">+91 7894561233</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-gray-400 mt-1" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">{t('profile.email')}</p>
                      <p className="text-sm text-gray-600">jatan.codinggita@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">{t('profile.address')}</p>
                      <p className="text-sm text-gray-600">
                        d 304, Gandhi, Gujarat, 385693, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Farm Information */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Car className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="ml-4 text-xl font-semibold text-gray-900">{t('profile.farmDetails')}</h2>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start">
                    <Tractor className="w-5 h-5 text-gray-400 mt-1" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">{t('profile.farmLocation')}</p>
                      <p className="text-sm text-gray-600">
                        11/4, Gandhi, Gujarat, 385693, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Sprout className="w-5 h-5 text-gray-400 mt-1" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">{t('profile.cultivation')}</p>
                      <p className="text-sm text-gray-600">
                        Specializing in wheat farming across 150 acres
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="w-5 h-5 text-gray-400 mt-1" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">{t('profile.region')}</p>
                      <p className="text-sm text-gray-600">India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">{t('profile.farmingOverview')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{t('profile.totalArea')}</p>
                      <p className="mt-2 text-3xl font-bold text-green-700">150</p>
                      <p className="text-sm text-gray-500">{t('profile.acres')}</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Map className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{t('profile.mainCrop')}</p>
                      <p className="mt-2 text-3xl font-bold text-green-700">Wheat</p>
                      <p className="text-sm text-gray-500">cultivation</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Wheat className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{t('profile.membership')}</p>
                      <p className="mt-2 text-3xl font-bold text-green-700">PRO</p>
                      <p className="text-sm text-gray-500">status</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Crown className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
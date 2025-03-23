// Team_35-AgriAuthentic/Farmer Dashboard/Frontend_Farmer/src/Pages/Products&Orders/Products.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BadgeCheck, Package } from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom';
import { ScaleLoader } from "react-spinners"

function Products() {
  const [Crops_data, setCrops_data] = useState([]);
  const [loading, setloading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const response = await axios.get('https://agriauthenic-poc-backend.onrender.com/product');
        console.log(response.data)
        setCrops_data(response.data.data);
        setloading(false)
      } catch (err) {
        console.error(err);
      }
    };
    fetchCrops();
  }, []);

  if (loading) {
    return <div className=' flex items-center justify-center mt-60'><ScaleLoader color="#39ee55"  /></div>
  }

  return (
    <div className="p-6 flex items-center justify-center bg-green-50">
      <h2 className="text-2xl font-bold text-gray-800 mb-6"></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
        {Crops_data.map((crop, index) => (
          <div
            key={crop.id || index}
            className="bg-white rounded-md shadow-md w-64 hover:shadow-lg transition-shadow duration-300 p-4"
          >
            {/* Image */}
            <img
              src={crop.imageLink}
              alt={crop.productName}
              className="h-52 w-58 object-cover rounded-md"
            />

            {/* Product Info */}
            <div className="mt-4 space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">{crop.productName}</h3>
              <div className='flex items-center justify-between'>
                <p className="text-gray-800 text-xl font-bold">₹{crop.productPrice}</p>
                <p className='bg-green-700 text-white text-[12px] flex items-center w-18 gap-1 justify-center p-0.5 rounded-2xl'>
                  <BadgeCheck color="#ffffff" size={14} />
                  Level-3
                </p>
              </div>
              <div className=" flex items-center gap-1">
                <span className='flex items-center gap-1'>
                  <Package color="black" size={18} />
                  {crop.stock}
                </span>
                <span className="text-gray-600">in Stock</span>
              </div>
            </div>

            {/* Buy Now Button */}
            <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium transition-all duration-300"
              onClick={() => navigate(`/products/details/${crop._id}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

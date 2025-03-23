import React from 'react';
import { Star, Truck, Shield, Award, ChevronLeft } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Farmer1 from '../assets/Farmer1.png'
import axios from 'axios'


export default function ProductDetail({ product, onBack }) {

  const notify = () => toast.success('Added to Cart', {
    duration: 1000,
    position: 'bottom-right',
    className: 'bg-green-200',
  });

  const postToBasket = async (productID) => {
    try {
      const response = await axios.post("https://agriauthenic-poc-backend.onrender.com/basket/add", {
        consumerId: "64b50c9e1c9d440000a1b2c2",
        productId: productID,
        quantity: 1,
      });

      console.log("Product added to basket:", response.data);
      notify()
      return response.data;
    } catch (err) {
      console.error("Error adding product to basket:", err.message);
    }
  };

  return (
    <>
      <Toaster />
      <div className="max-w-4xl mx-auto mt-10">
        <Link to="/shop/market">
          <button
            className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ChevronLeft size={20} />
            <span>Back to Marketplace</span>
          </button>
        </Link>

        <div className="bg-white rounded-lg border overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-2xl font-semibold">{product.name}</h1>
                  <p className="text-gray-600">{product.farm}</p>
                </div>
                <div className="flex items-center gap-1 bg-green-50 px-3 py-1 rounded-full">
                  <span className="text-green-600">Level {product.level}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-3">
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
                <span className="font-medium">{product.rating}</span>
              </div>

              <div className="mt-6">
                <div className="text-3xl font-semibold">
                  ₹{product.price.toFixed(2)}
                  <span className="text-base text-gray-500">/{product.unit}</span>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Truck className="text-gray-400" size={20} />
                  <span>Free delivery on orders over ₹100</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="text-gray-400" size={20} />
                  <span>100% authentic product guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="text-gray-400" size={20} />
                  <span>Certified organic produce</span>
                </div>
              </div>

              <button
                onClick={() => postToBasket(product.id)}
                className="mt-8 w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Add to Cart
              </button>
            </div>
          </div>

          <div className="p-6 border-t">
            <h2 className="text-lg font-semibold mb-4">Product Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Description</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="font-medium">Origin: </span>
                  <span className="text-gray-600">{product.origin}</span>
                </div>
                <div>
                  <span className="font-medium">Certifications: </span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {product.certification.map((cert, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="font-medium">Harvest Date: </span>
                  <span className="text-gray-600">{product.harvestDate}</span>
                </div>
                <div>
                  <span className="font-medium">Shelf Life: </span>
                  <span className="text-gray-600">{product.shelfLife}</span>
                </div>
              </div>
              <div>
                <h1 className='font-semibold text-xl'>Traceability and farmer details</h1>
                <Link to="/shop/kisan/detail/1">
                  <img src={Farmer1} alt="" width={250} className='mt-5 hover:shadow-lg rounded-2xl hover:scale-110 transition duration-300 cursor-pointer' />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
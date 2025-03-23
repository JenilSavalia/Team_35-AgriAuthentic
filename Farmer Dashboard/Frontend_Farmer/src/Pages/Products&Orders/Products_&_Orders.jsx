// Team_35-AgriAuthentic/Farmer Dashboard/Frontend_Farmer/src/Pages/Products&Orders/Products_&_Orders.jsx
// Farmer Dashboard/Frontend_Farmer/src/Pages/Products&Orders/Products_&_Orders.jsx
import { useState } from 'react';
import { Package, ShoppingBag, Upload, X } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';
import { useTranslation } from "react-i18next"; 

function Products_Layout() {
  const { t } = useTranslation(); // ✅ Use translation hook
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    productName: '',
    productDescription: '',
    productPrice: '',
    stock: '',
    harvestLocation: '',
    harvestDate: '',
    tags: '',
    imageLink: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setShowModal(false);
    setFormData({
      productName: '',
      productDescription: '',
      productPrice: '',
      stock: '',
      harvestLocation: '',
      harvestDate: '',
      tags: '',
      imageLink: '',
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mx-5">
        <nav className="bg-gray-100 h-13 w-62 flex justify-center items-center mx-2 space-x-4 p-4 rounded-md shadow-md">
          <NavLink
            to="/products/Crops"
            className={({ isActive }) =>
              `flex items-center gap-2 px-6 py-2 text-gray-700 font-medium transition-all duration-300 
              ${isActive ? 'bg-white border border-none text-green-600 rounded-md' : 'hover:bg-gray-200 rounded-md'}`
            }
          >
            {({ isActive }) => <Package size={20} className={isActive ? "text-green-600" : "text-gray-700"} />}
            {t('products')} {/* ✅ Dynamic translation */}
          </NavLink>

          <NavLink
            to="/products/Orders"
            className={({ isActive }) =>
              `flex items-center gap-2 px-6 py-2 text-gray-700 font-medium transition-all duration-300 
              ${isActive ? 'bg-white border border-none text-green-600 rounded-md' : 'hover:bg-gray-200 rounded-md'}`
            }
          >
            {({ isActive }) => <ShoppingBag size={20} className={isActive ? "text-green-600" : "text-gray-700"} />}
            {t('orders')} {/* ✅ Dynamic translation */}
          </NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            className="text-white flex bg-green-600 p-2.5 rounded-md gap-1.5 items-center" 
            onClick={() => setShowModal(true)}
          >
            <Upload color="#fefbfb" />
            {t('listNewProduct')} {/* ✅ Dynamic translation */}
          </button>
        </div>
      </div>
      <div className="p-6">
        <Outlet />
      </div>

      {/* Modal Popup for Adding Product */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">{t('addNewProduct')}</h2> {/* ✅ Dynamic translation */}
              <button onClick={() => setShowModal(false)}>
                <X size={20} className="text-gray-600 hover:text-red-600" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="productName"
                placeholder={t('productName')} // ✅ Dynamic translation
                value={formData.productName}
                onChange={handleInputChange}
                required
                className="w-full border p-2 rounded-md"
              />

              <textarea
                name="productDescription"
                placeholder={t('productDescription')} // ✅ Dynamic translation
                value={formData.productDescription}
                onChange={handleInputChange}
                required
                className="w-full border p-2 rounded-md"
              />

              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  name="productPrice"
                  placeholder={t('price')} // ✅ Dynamic translation
                  value={formData.productPrice}
                  onChange={handleInputChange}
                  required
                  className="border p-2 rounded-md"
                />

                <input
                  type="number"
                  name="stock"
                  placeholder={t('stock')} // ✅ Dynamic translation
                  value={formData.stock}
                  onChange={handleInputChange}
                  required
                  className="border p-2 rounded-md"
                />
              </div>

              <input
                type="text"
                name="harvestLocation"
                placeholder={t('harvestLocation')} // ✅ Dynamic translation
                value={formData.harvestLocation}
                onChange={handleInputChange}
                required
                className="w-full border p-2 rounded-md"
              />

              <input
                type="date"
                name="harvestDate"
                placeholder={t('harvestDate')} // ✅ Dynamic translation
                value={formData.harvestDate}
                onChange={handleInputChange}
                required
                className="w-full border p-2 rounded-md"
              />

              <input
                type="text"
                name="tags"
                placeholder={t('tags')} // ✅ Dynamic translation
                value={formData.tags}
                onChange={handleInputChange}
                required
                className="w-full border p-2 rounded-md"
              />

              <input
                type="text"
                name="imageLink"
                placeholder={t('imageLink')} // ✅ Dynamic translation
                value={formData.imageLink}
                onChange={handleInputChange}
                required
                className="w-full border p-2 rounded-md"
              />

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-md font-medium transition-all duration-300 hover:bg-green-700"
              >
                {t('submit')} {/* ✅ Dynamic translation */}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products_Layout;

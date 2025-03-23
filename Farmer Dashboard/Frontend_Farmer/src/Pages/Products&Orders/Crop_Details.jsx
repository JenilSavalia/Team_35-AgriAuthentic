import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BadgeCheck, Package, MapPin, Calendar } from "lucide-react";

function ProductDetails() {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:4009/product/${id}`);
        setProduct(response.data.data);
      } catch (err) {
        console.error("Error fetching product details:", err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center text-xl font-semibold">Loading...</p>;

  return (
    <div className="p-6 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full">
        <div className="flex justify-center">
          <img
            src={product.imageLink}
            alt={product.productName}
            className="w-64 h-64 object-cover rounded-md"
          />
        </div>
        <div className="mt-6 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">{product.productName}</h2>
          <p className="text-gray-600">{product.productDescription}</p>
          <div className="flex items-center justify-between text-lg font-semibold">
            <span className="text-green-600 text-2xl font-bold">₹{product.productPrice}</span>
            <div className="flex items-center gap-1">
              <Package color="black" size={20} />
              <span>{product.stock} in Stock</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-gray-700 mt-2">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Harvest Location:-</span>
              <span>{product.harvestLocation}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>Harvested Date:-</span>
              <span>{product.harvestDate}</span>
            </div>
          </div>
          {/* <div className="flex flex-wrap gap-2 mt-4">
            {product.tags.map((tag, index) => (
              <span key={index} className="bg-green-100 text-green-700 px-3 py-1 text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div> */}
          <div className="flex items-center gap-2 bg-green-700 text-white w-max px-3 py-1 rounded-md text-sm mt-2">
            <BadgeCheck size={18} />
            Verified Product
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

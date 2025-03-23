// Team_35-AgriAuthentic/Farmer Dashboard/Frontend_Farmer/src/Pages/Products&Orders/Orders.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ScaleLoader } from "react-spinners"

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedOrder, setExpandedOrder] = useState(null);

  const farmer_id = '67d863c30483e54137777826';

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `https://agriauthenic-poc-backend.onrender.com/order/farmer/${farmer_id}`
        );
        setOrders(response.data.data);
        console.log(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div className=" h-full w-full flex items-center justify-center mt-50"> <ScaleLoader color=' lightgreen' />
    </div>
  }
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      {orders.length === 0 ? (
        <p className="text-gray-500">No orders available.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order._id} className="border rounded-lg p-4 shadow-md bg-white">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => setExpandedOrder(expandedOrder === order._id ? null : order._id)}>
                <div>
                  <div className=" flex items-center justify-between w-[45vw]">
                    <p className="font-medium text-lg">{order.consumer.name}</p>
                    <p className="text-black bg-amber-200 p-1 w-23 items-center justify-center flex rounded-2xl">{order.orderDetail.deliveryStatus}</p>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Order ID: {order._id}

                  </p>
                  <p className="text-gray-500 text-sm"><span className="font-semibold">{
                    order.orderDetail.orderedProducts.map((product) => (
                      <p><span className="font-bold text-black">Total Amount:</span> ₹{product.item.productPrice * product.quantity}</p>
                    ))
                  }</span></p>
                </div>
                {expandedOrder === order._id ? <ChevronUp /> : <ChevronDown />}
              </div>

              {expandedOrder === order._id && (
                <div className="mt-4 border-t pt-4">
                  <p className="text-gray-700"><span className="font-semibold">Order Date:</span> {new Date(order.orderDetail.orderTime).toLocaleDateString()}</p>
                  <p className="text-gray-700"><span className="font-semibold">Expected Delivery:</span> {new Date(order.orderDetail.expectedDelivery).toLocaleDateString()}</p>

                  <div className="mt-3">
                    <h3 className="text-lg font-semibold">Products Ordered:</h3>
                    <ul className="space-y-2 mt-2">
                      {order.orderDetail.orderedProducts.map((product) => (
                        <li key={product._id} className="border rounded p-2 bg-gray-100">
                          <p><span className="font-semibold">Product:</span> {product.item.productName}</p>
                          <p><span className="font-semibold">Quantity:</span> {product.quantity}Kg</p>
                          <p><span className="font-semibold">Price:</span> ₹{product.item.productPrice}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3">
                    <h3 className="text-lg font-semibold">Delivery Address:</h3>
                    <p className="text-gray-700">{order.consumer_address.city}, {order.consumer_address.state}, {order.consumer_address.country}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;

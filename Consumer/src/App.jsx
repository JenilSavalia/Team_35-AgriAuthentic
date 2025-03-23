// Team_35-AgriAuthentic/Consumer/src/App.jsx
import BusinessLanding from "./Pages/BusinessLanding";
import ConsumerLanding from "./Pages/ConsumerLanding";
import KisanConnect from "./Pages/KisanConnect/KisanConnect";
import KisanDetail from "./Pages/KisanConnect/KisanDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MarketPlace from "./Pages/Market/MarketPlace";
import ProductVerification from "./components/ProductVerification";
import OrderCatalog from "./Pages/MyOrders/OrderCatalog";
import ConsumerOrders from "./Pages/MyOrders/ConsumerOrders";
import DetailProduct from "./Pages/Products/DetailProduct";
import Cart from "./Pages/Cart/Cart";
import CheckoutSuccess from "./Pages/CheckoutSuccess";
import VerificationHome from "./components/Verification/VerificationHome";
import SearchBar from "./Pages/Header/SearchBar";
import FarmerLanding from "./Pages/FarmerLanding";


function App() {

  return (
    <>
      <Router>
        <Routes>

          {/* Landing Pages */}
          <Route path="/" element={<BusinessLanding />} />
          <Route path="/market" element={<ConsumerLanding />} />

          <Route path="/shop/market" element={<MarketPlace />} />
          <Route path="/shop/product/:productId" element={<DetailProduct />} />

          <Route path="/shop/myorders" element={<OrderCatalog />} />
          <Route path="/shop/myorders/:orderId" element={<ConsumerOrders />} />

          <Route path="/shop/verify" element={<ProductVerification />} />
          <Route path="/shop/kisan" element={<KisanConnect />} />

          {/* <Route path="/shop/kisan/detail" element={<KisanDetail />} /> */}
          <Route path="/shop/kisan/detail/:kisanID" element={<KisanDetail />} />

          <Route path="/shop/cart" element={<Cart />} />

          <Route path="/checkout-success" element={<CheckoutSuccess />} />

          <Route path="/shop/verify/details" element={<VerificationHome />} />


          <Route path="/s" element={<SearchBar />} />


          <Route path="/farmer" element={<FarmerLanding />} />




        </Routes>
      </Router>
    </>
  )
}

export default App

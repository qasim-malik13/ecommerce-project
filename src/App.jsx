import "./App.css";
import HomePage from "./Pages/Home/HomePage.jsx";
import { Routes, Route } from "react-router";
import CheckoutPage from "./Pages/Checkout/CheckoutPage.jsx";
import OrdersPage from "./Pages/Orders/OrdersPage.jsx";
import TrackingPage from "./Pages/TrackingPage.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);

   const loadCart = async () => {
      const response = await axios.get("/api/cart-items?expand=product");
      setCart(response.data);
    };
  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
      <Route path="/orders" element={<OrdersPage cart={cart} />} />
      <Route path="/tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App;

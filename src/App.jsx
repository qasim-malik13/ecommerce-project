import './App.css'
import HomePage from "./Pages/HomePage"
import { Routes, Route } from 'react-router'
import CheckoutPage from "./Pages/CheckoutPage.Jsx"
import OrdersPage from "./Pages/OrdersPage.jsx"
import TrackingPage from "./Pages/TrackingPage.jsx"
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
    const [cart, setCart] = useState([]);

    useEffect(()=> {
       axios.get("/api/cart-items?expand=product").then((response) => {
        setCart(response.data);
    })
    }, [])

  return (
    <Routes>
      <Route index element={<HomePage cart = {cart}/>}/>
      <Route path='/checkout' element={<CheckoutPage cart = {cart}/>}/>
      <Route path='/orders' element={<OrdersPage/>}/>
      <Route path='/tracking' element={<TrackingPage/>}/>
    </Routes>
  )
}

export default App

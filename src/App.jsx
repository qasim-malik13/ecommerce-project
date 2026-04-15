import './App.css'
import HomePage from "./Pages/HomePage"
import { Routes, Route } from 'react-router'
import CheckoutPage from "./Pages/CheckoutPage.Jsx"
import OrdersPage from "./Pages/OrdersPage.jsx"
import TrackingPage from "./Pages/TrackingPage.jsx"

function App() {

  return (
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path='/checkout' element={<CheckoutPage/>}/>
      <Route path='/orders' element={<OrdersPage/>}/>
      <Route path='/tracking' element={<TrackingPage/>}/>
    </Routes>
  )
}

export default App

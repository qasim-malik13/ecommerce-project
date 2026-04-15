import './App.css'
import HomePage from "./Pages/HomePage"
import { Routes, Route } from 'react-router'
import CheckoutPage from "./Pages/CheckoutPage.Jsx"

function App() {

  return (
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path='/checkout' element={<CheckoutPage/>}/>
    </Routes>
  )
}

export default App

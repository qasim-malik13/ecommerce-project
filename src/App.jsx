import './App.css'
import HomePage from "./Pages/HomePage"
import { Routes, Route } from 'react-router'

function App() {


  return (
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path='/checkout' element={<div>Check-out</div>}/>
    </Routes>
  )
}

export default App

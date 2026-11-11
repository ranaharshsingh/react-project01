import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from  './pages/Home.jsx'
import About from './pages/About.jsx'
import Navbar from './component/Navbar.jsx'
import Product from './pages/Product.jsx'


const App = () => {
  return (
    <div>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/product" element={<Product/>} />

      </Routes> 
    </div>
  )
}

export default App

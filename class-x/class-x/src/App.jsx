
import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './component/home'
import About from './component/about'
import Product from './component/product'
const App = () => {
  return (
    <div>
      {/* <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/product' element={<Product/>} />
      </Routes> */} <About/>
    </div>
  )
}

export default App

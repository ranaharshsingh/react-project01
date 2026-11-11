import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <h3>Navbar</h3>
        <div className='navigate' >
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
            <Link to="/product">product</Link>
            {/* <a href="/">home</a>
            <a href="/">about</a>
            <a href="/">product</a> */}
        </div>
    </div>
  )
}

export default Navbar

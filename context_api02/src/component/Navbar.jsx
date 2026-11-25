import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <h1>theme is {props.theme}</h1>
      <button onClick={()=>{
        props.setTheme("dark")
      }}>change theme</button>
      
    </div>
  )
}

export default Navbar

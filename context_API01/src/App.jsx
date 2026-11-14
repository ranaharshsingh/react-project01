import React from 'react'
import axios from 'axios'


const App = () => {
  const getData=async()=>{

   const response=await axios.get('http://localhost:8000/data')
   console.log(response);
  }
  return (
    <div>
      <button onClick={getData}>click</button>
    </div>
  )
}

export default App

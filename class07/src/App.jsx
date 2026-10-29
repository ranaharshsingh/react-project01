import React, { useState } from 'react'
import axios from 'axios';

const App = () => { 
  const [allData,setAllData]=useState([]);
  const getData = async()=>{
    // console.log('hello ji hello')
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    setAllData(response.data)
  }
  return (
    <div >hii
      <button onClick={getData}>click data</button>

      {allData.map(function(elem, idx){
        return <h1 key={idx}>{elem.name}{idx+1}</h1>
      })}
    </div>
  )
}

export default App

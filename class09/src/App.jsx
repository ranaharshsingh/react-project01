import React from 'react'
import axios from 'axios'
const App = () => {
  const getData=()=>{
    const response = axios.get('https://jsonplaceholder.typicode.com/users?utm_source=chatgpt.com')
    console.log('data aa gya guys!')
  }
  return (
    <div>
      <button onClick={getData}>get data</button>
    </div>
  )
}

export default App

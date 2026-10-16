import React from 'react'
import Card from './card'
const App = () => {

     const age=29;
     const user='sarthak';


  return (
    <div>
       <Card />
       <h1 className='text-green-700 text-xl'>{user}, {age}</h1>
    </div>
  )
}

export default App

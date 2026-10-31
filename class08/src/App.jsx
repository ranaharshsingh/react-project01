import React,{useState} from 'react'
import Axios from 'axios'
const App = () => {

   const [number1, setnumber1] = useState([0]);
   const [number2, setnumber2] = useState([0]);
   const [number3, setnumber3] = useState([0]);

   

  return (
    <>
    <div>
      <h1>{number1}</h1>
      <button  onClick={()=>{
        setnumber1(Math.floor(Math.random()*100));
      }}>change number1</button>
    </div>
     <div>
      <h1>{number2}</h1>
      <button  onClick={()=>{
        setnumber2(Math.floor(Math.random()*100));
      }}>change number1</button>
    </div>
     <div>
      <h1>{number3}</h1>
      <button  onClick={()=>{
        setnumber3(Math.floor(Math.random()*100));
      }}>change number1</button>
    </div>
    </>
  )
}

export default App

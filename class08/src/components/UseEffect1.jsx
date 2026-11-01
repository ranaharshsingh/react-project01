import React,{useEffect, useState} from 'react'
import Axios from 'axios'
const UseEffect1 = () => {

   const [number1, setnumber1] = useState([0]);
   const [number2, setnumber2] = useState([0]);
   const [name, setname] = useState('write tehe name');
  
   const getData= async()=>{

    const response=await Axios.get('https://randomuser.me/api/')
    let xyz=(response.data.results[0].name.first )
    
    setname(xyz)
   }
    useEffect(function(){
      getData();
    },[number1,number2])

   

  return (
    <>
    <div>
      <h1>{number1}</h1>
      <button  onClick={()=>{
        setnumber1(Math.floor(Math.random()*100));
       
      }}>change number1</button>
      <h2>{xyz}</h2>
    </div>
     <div>
      <h1>{number2}</h1>
      <button  onClick={()=>{
        setnumber2(Math.floor(Math.random()*100));
      }}>change number1</button>
    </div>
     {/* <div>
      <h1>{number3}</h1>
      <button  onClick={()=>{
        setnumber3(Math.floor(Math.random()*100));
      }}>change number1</button>
    </div> */}
    </>
  )
}

export default UseEffect1

import {useState,useEffect} from 'react'
import Axios from 'axios'

const UseEffect2 = () => {

   const [number1, setnumber1] = useState([0]);
   const [number2, setnumber2] = useState([0]);
   const [name, setname] = useState('write tehe name');
  
   const getData= async()=>{

    const response=await Axios.get('https://randomuser.me/api/')
     setname(response.data.results[0].name.first +" "+response.data.results[0].name.last)
    
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
      <h2>{name}</h2>
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

export default UseEffect2

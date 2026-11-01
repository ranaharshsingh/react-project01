import {useEffect,useState} from 'react'
import Axios from 'axios'
const UseEffect3 = () => {

    const [allData,setAllData]=useState(null)

    const getData= async()=>{
         const response=await Axios.get('https://randomuser.me/api/')
         setAllData(response.data)
         console.log(response.data)
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
        <h1>initial</h1>
        <h1>{allData?.results[0]?.name?.first ??'Loading...'}</h1>
        

      
    </div>
  )
}

export default UseEffect3

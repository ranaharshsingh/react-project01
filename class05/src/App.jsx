import React, { useState } from 'react'
import "./index.css"

const App = () => {
  const [UserName,setUserName]=useState('')
  const [UserUrl,setUserUrl]=useState('')
  const [UserRole,setUserRole]=useState('')
  const [UserDescription,setUserDescription]=useState('')

  let submitHandler=(e)=>{
      e.preventDefault()
      console.log("form submitted");
  }
  return (
    <div className='h-screen bg-black text-white'>
      <form  onSubmit={(e)=>{ 
          submitHandler(e);
      }} className='flex flex-wrap justify-center p-2'>
        <input 
          value={UserName}
        onChange={(e)=>{
          setUserName(e.target.value);
          console.log(e.target.value)
        }}
        className='border-2 px-5 py-2 text-xl font-ssemibold rounded m-2 w-[45%]' 
        type="text" 
        placeholder='Enter the name' />
        <input 
         value={UserUrl}
        className='border-2 px-5 py-2 text-xl font-ssemibold rounded m-2 w-[45%]' 
        type="text" 
        placeholder='image url'/>
        <input 
        value={UserRole}
        className='border-2 px-5 py-2 text-xl font-ssemibold rounded m-2 w-[45%]' 
        type="text" 
        placeholder='Enter role'/>
        <input 
        value={UserDescription}
        className='border-2 px-5 py-2 text-xl font-ssemibold rounded m-2 w-[45%]' 
        type="text" 
        placeholder='Enter description'/>
        <button className='px-5 py-2 bg-emerald-700 actice:scale-95 cursor-pointer font-semibold rounded m-2 w-[90%]'>create user</button>
      </form>
      <div>

      </div> 
    </div>

    
  )
}

export default App

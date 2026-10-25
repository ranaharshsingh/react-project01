import React, { useState } from 'react'
import Cards from './components/cards.jsx'
import "./index.css"

const App = () => {
  const [UserName,setUserName]=useState('')
  const [UserUrl,setUserUrl]=useState('')
  const [UserRole,setUserRole]=useState('')
  const [UserDescription,setUserDescription]=useState('')

  const [AllUsers,setAllUsers]=useState([])

  let submitHandler=(e)=>{
      e.preventDefault()
      console.log("form submitted");

      const oldUsers=[...AllUsers]
      oldUsers.push({UserName,UserRole,UserDescription,UserUrl})
       console.log(AllUsers)
      setAllUsers(oldUsers)
      console.log(oldUsers)

      setUserName('')
      setUserUrl('')
      setUserRole('')
      setUserDescription('')
  }
  let deleteHandler=(idx)=>{
    let copyUsers=[...AllUsers]
    copyUsers.splice(idx,1)
    setAllUsers(copyUsers)

  }
  return (
    <div className='h-screen bg-black text-white'>
      <form  onSubmit={(e)=>{ 
          submitHandler(e);
      }} className='px-2 py-2 flex flex-wrap'>
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
         onChange={(e)=>{
          setUserUrl(e.target.value);
          console.log(e.target.value)
         }}
        className='border-2 px-5 py-2 text-xl font-ssemibold rounded m-2 w-[45%]' 
        type="text" 
        placeholder='image url'/>
        <input 
        value={UserRole}
        onChange={(e)=>{
          setUserRole(e.target.value);
          console.log(e.target.value)
        }}
        className='border-2 px-5 py-2 text-xl font-ssemibold rounded m-2 w-[45%]' 
        type="text" 
        placeholder='Enter role'/>
        <input 
        value={UserDescription}
        onChange={(e)=>{
          setUserDescription(e.target.value);
          console.log(e.target.value)
        }}
        className='border-2 px-5 py-2 text-xl font-ssemibold rounded m-2 w-[45%]' 
        type="text" 
        placeholder='Enter description'/>
        <button className='px-5 py-2 bg-emerald-700 actice:scale-95 cursor-pointer font-semibold rounded m-2 w-[91%]'>create user</button>
      </form>
      <div className='px-4 py-10 gap-5 flex flex-wrap'>
            {AllUsers.map(function(elem,idx){
            return <Cards elem={elem} idx={idx} deleteHandler={deleteHandler}/>
          })}
         
      </div> 
    </div>

    
  )
}

export default App

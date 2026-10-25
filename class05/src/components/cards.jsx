import React from 'react'

const Cards = (props) => {
  return (
     <div  className='lg:w-[19vw] md:[30vw] sm:w-[45vw]  py-8 px-8 text-center flex flex-col items-center bg-white text-black rounded-xl'>
          <img className='h-24 w-24 rounded-full object-center object-cover ' src={props.elem.UserUrl} alt="" />
          <h2 className='text-2xl mt-2 font-semibold'>{props.elem.UserName}</h2>
          <h5 className='text-blue-500 text-lg font-semiibold my-2'>{props.elem.UserRole}</h5>
          <p className='text-sm font-medium leading-tight '>{props.elem.UserDescription}</p>
        <button onClick={()=>{
          props.deleteHandler(props.idx);
        }} className='px-4 py-2 rounded bg-red-500 text-xs cursor-pointer active:scale-95 text-white font-semibold mt-3'>Remove</button>
           </div>
  )
}

export default Cards
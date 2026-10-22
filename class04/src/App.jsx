import React from 'react'
import './style/style.scss'

const App = () => {
  return (
    <div className='main'>
        {/* <div className='card1'></div>
        <div className='card2'></div> */}
         <div className='card1'>
          <div className='bg'></div>
          <div className='image'>

        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
          </div>
        <h3>avex jassons</h3>
        <br />
        <p>creative Designer who focuses on <br />aesthetic & simplicity.</p>
        <div className='flex'>
        <div> 
          <p>77.2k</p>
          <small>likes</small>
        </div>
        <div>
          
          <p>727</p>
          <small>posts</small>
        </div>
        <div>
          <p>277.2k</p>
          <small>views</small>
        </div>
        </div>
      </div>
      
      <div className='card2'>
        <div className='bg'></div>
        <div className='image'>

        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
        </div>
        <h3>avex jassons</h3><br />
        <p>creative Designer who focuses on <br />aesthetic & simplicity.</p>
        <div className='flex'>

        <div> 
          <p>77.2k</p>
          <small>likes</small>
        </div>
        <div>
          <p>727</p>
          <small>posts</small>
        </div>
        <div>
          <p>277.2k</p>
          <small>views</small>
        </div>
        </div>
      </div>
    </div>
  
  )
}

export default App

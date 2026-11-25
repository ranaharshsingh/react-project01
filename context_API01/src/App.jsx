import React, { useState } from 'react'
import { Usercontext } from './component/UserContext'
import Navbar from './component/Navbar'
const App = () => {
    const user="harsh";
    
  return (
    <Usercontext.Provider value={user}>
      <Navbar  />
    </Usercontext.Provider>
  );
}

export default App

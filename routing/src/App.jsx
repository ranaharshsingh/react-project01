import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Home from './pages/Home.jsx'
import About from "./pages/About.jsx";
import Profile from "./pages/Profile.jsx";
import Destination from "./pages/Destination.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <div>
       
      <Navbar /> 

       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destination" element={<Destination />} />

        <Route path="/profile/:id" element={<Profile />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    
  );
}

export default App;
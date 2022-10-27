import React from "react";
import {Routes, Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import Home from "./pages/Home";
import Register from './pages/Registeration'
import Login from './pages/Login'
import  Shop from "./pages/Shop";
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="createaccount" element={<Register/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="shop" element={<Shop/>}/>
      </Routes>   
    </BrowserRouter>
        
  );
}

export default App;

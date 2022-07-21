import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import Messages from "./Messages"
import SignUp from "./SignUp";


 function Apps() {
  return(
      <div>
 <NavBar/> 
    <Routes>
      <Route exact path="/about" element={ <About />}></Route>
       <Route exact path="/message" element={ <Messages />}></Route>
      <Route exact path="/Signup" element={ <SignUp />}></Route>
     <Route exact path="/login" element={ <Login />}></Route>
      <Route exact path="/" element={ <Home />}>
      </Route>
    </Routes>
    <div/>
    
  </div>)}
 
  
  export default Apps;
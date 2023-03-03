import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/home/Home";
import Profile from "../views/profile/Profile";
import Login from "../views/login/Login";
import Register from "../views/register/Register";
import NavBar from "../components/navbar/Navbar";


const Router = () => {
   return (
      <BrowserRouter>
      <NavBar/>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
         </Routes>
      </BrowserRouter>
   );
};

export default Router
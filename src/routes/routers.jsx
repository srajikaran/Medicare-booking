import React from "react";
import Home from "../pages/home"
import Contact from "../pages/contact"
import Login from "../pages/login"
import Services from "../pages/services"
import Signup from "../pages/signup"
import Doctors from "../pages/doctors/doctors"
import Doctordetail from "../pages/doctors/doctordetail"

import {Routes, Route} from "react-router-dom"

const routers = () => {
    return <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/doctordetail" element={<Doctordetail/>}/>
    </Routes>
};

export default routers;
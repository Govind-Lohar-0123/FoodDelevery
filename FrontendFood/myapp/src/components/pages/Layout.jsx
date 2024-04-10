import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../partials/header";
import Footer from "../partials/Footer";
import ProfileDash from "./UserProfile/ProfileDash";
import Register from "./auth/login";
import Login from "./auth/login";
import { getToken } from "./auth/tokenAction.js";
function Layout(){
    
   
    return (<>
        <Header/>
       
        <Login/>
        <Register/>
        <Outlet/>
       <Footer/>
       
    </>)
}
export default Layout;
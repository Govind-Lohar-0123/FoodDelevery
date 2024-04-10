import React from "react";
import Background from "./Background";
import FoodSection from "./FoodSection";
import Login from "./auth/login";
import Register from "./auth/register";


function Container(){
    
    return (<>
        <div className="main p-0 m-0 width-100">
          <Background/>
          <FoodSection/>
          <Login/>
          <Register/>
          
        </div>

    </>)
}
export default Container;
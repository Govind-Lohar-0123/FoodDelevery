import React ,{useEffect} from "react";
import loaded from "../js/script.js"


function Footer(){
    

    useEffect(()=>{
        loaded();
    })
    return (<>
        <footer>
        <marquee direction="right" behavior="alternate" loop className="w-100 py-3  bg-primary text-black">
            <h2 className="h1 w-25 text-white  text-white font-weight-bold food-title text-black text-center" >Food Delivery is Open</h2>

            </marquee>
        </footer>
    </>)
}
export default Footer;
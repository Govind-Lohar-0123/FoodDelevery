import React, { useEffect, useState } from "react";


import foodbg1 from "../images/foodbg1.jpg";
import foodbg2 from "../images/foodbg2.jpg";
import foodbg3 from "../images/foodbg3.jpg";
import foodbg4 from "../images/foodbg4.jpg";
import { useDispatch ,useSelector} from "react-redux";
import { addSearch } from "../../features/searchSlice.js";
import { bgLoaded } from "../js/script.js";

function Background(){
    const [search,setSearch]=useState("");
    const dispatch = useDispatch();
   
    function inputHandle(e){
        setSearch(e.target.value);
        dispatch(addSearch(search));
    }
    useEffect(()=>{bgLoaded()})

    return (<>
        <div className="back-ground">
            <div className="food-search bg-white">
                <input type="text" className="" value={search} onChange={inputHandle}placeholder="Search food here..."/>
                {/* <div className="search-icon rounded"><i className="fa-2x text-white fa-solid fa-magnifying-glass"></i></div> */}
            </div>
            <div className="slider-div">
                <div className="slide"><img className="w-100 d-block bg-danger"src={foodbg1}  /></div>
                <div className="slide"><img className="w-100 d-block bg-danger"src={foodbg2}  /></div>
                <div className="slide"><img className="w-100 d-block bg-danger"src={foodbg3}  /></div>
                <div className="slide"><img className="w-100 d-block bg-danger"src={foodbg4}  /></div>
               
                
            </div>
            
            <div>
                <ul className="paginate">
                    <li ><a id="prev">Prev</a></li>
                    <li><a id="1">1</a></li>
                    <li><a id="2">2</a></li>
                    <li><a id="3">3</a></li>
                    <li ><a id="next">Next</a></li>
                   
                    
                </ul>
            </div>

            
        </div>

    </>)
}
export default Background;
import React, { useState } from "react";
import { useDispatchCard, useStateCard } from "../pages/CardProvider.js";
import { Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";


function Card(props) {
    const dispatch = useDispatchCard();
    const state = useStateCard();
    const [foodQty, setFoodQty] = useState(1);
    const [foodSize, setFoodSize] = useState("Full");
    const halfPrice = props.item.option[0].half;
    const fullPrice = props.item.option[0].full;

    let price = (foodSize == "Full") ? fullPrice : (halfPrice / 2);

    let finalPrice = (foodQty * price);
    // console.log(finalPrice);
    function handleAddToCard(e) {
        e.preventDefault();

        let foodItem = { foodQty, foodSize, foodId: props.item._id, foodPrice: finalPrice, foodName: props.item.foodName, foodImg: props.item.foodImg };



        let isSameSize = Boolean(false);
        for (let food of state) {
            if (food.foodId == props.item._id && food.foodSize == foodSize) {
                isSameSize = true; break;
            }
        }
        if (isSameSize) {
            foodItem = { foodQty, foodId: props.item._id, foodPrice: finalPrice, foodSize };
            dispatch({ type: "UPDATE", foodItem });
            return;
        }


        dispatch({ type: "ADD", foodItem });

    }



    return (<>



        <div className="card  col-div h-50" >
            <img src={props.item.foodImg} className="card-img w-100" />
            <div className="card-body p-0 ">
                <p className="card-title font-weight-bold" >{props.item.foodName}</p>
                <div className="mt-4 row-div">
                    <select className="bg-primary col-div food-quant text-black" onChange={(e) => setFoodQty(e.target.value)}>
                        {
                            [1, 2, 3, 4, 5, 6].map((q, i) => {
                                return (<option key={i} className="text-white">{q}</option>)
                            })
                        }
                    </select>

                    <FormControl fullWidth >
                   
                        <select
                           
                            value={foodSize}
                            
                            onChange={e => {
                                setFoodSize(e.target.value);
                            }}
                        >
                            {
                                Object.keys(props.item.option[0]).map((k, idx) => {

                                    return <option style={{ fontSize: "14px" }} key={idx} value={props.item.option[0].k}>{k.toUpperCase()}</option>
                                })
                            }
                        </select>
                    </FormControl>








                    <span className="text-black col-div font-weight-bold food-price" >{finalPrice}/</span>

                </div>
            </div>
            {/* <Typography>{pro}</Typography> */}
            <div className="card-footer text-center ">
                <button className="btn btn-primary text-white" onClick={handleAddToCard}>Add To Card</button>
            </div>
        </div>



    </>)
}
export default Card;
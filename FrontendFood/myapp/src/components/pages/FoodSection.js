import React from "react";
import { useGetFoodsQuery } from "../../services/foodSlice.js";
import Card from "../partials/card.js";
import { useSelector } from "react-redux";

import { CircularProgress, Box, Typography } from "@mui/material";
function FoodSection() {
    const responseInfo = useGetFoodsQuery();

    const search = useSelector((state) => state.searchFood.search);

    return (<>
        <section id="food-section" className="">
            {
                ((responseInfo.isSuccess == false)) ? <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 20, textAlign: "center" }}>
                    <CircularProgress color="primary" />
                    <Typography className="text-bold text-muted">Loading</Typography>
                </Box> : ""
            }
            <marquee direction="right" behavior="alternate" loop className=" w-100 mb-1 text-black">
                <h2 className="h1 w-25 text-white font-weight-bold my-3 food-title text-black text-center" >Welcome</h2>
            </marquee>
            {/* --------------FOOD CATEGORY------------------ */}

            {
                (responseInfo.isSuccess == true) ?
                    responseInfo.data.foodCat.map((data, i) => {

                        return (


                            <section key={i} className=" food-category py-1">
                                <h2 className="h1 font-weight-bold m-0  food-category text-white  food-title  " >{data.categoryName}</h2>
                                <div className="row-div pt-5">
                                    {
                                        responseInfo.data.foodData.filter((item, i) => {
                                            console.log(search);

                                            return (item.categoryName.toLowerCase() == data.categoryName.toLowerCase()) && (item.foodName.toLowerCase().includes(search.toLowerCase()))
                                        }).

                                            map((item, i) => {
                                                // console.log("hello");
                                                return (<Card item={item} key={i} />)

                                            })
                                    }
                                </div>
                            </section>)
                    })

                    : ""
            }
        </section>








    </>)
}
export default FoodSection;
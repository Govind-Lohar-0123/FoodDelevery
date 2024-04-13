import react, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useStateCard, useDispatchCard } from "../CardProvider.js";
import { useAddOrderMutation, useGetOrderMutation, useGetOrderQuery } from "../../../services/orderSlice.js";
import { getUser } from "../auth/userActions.js";
export default function MyOrder() {

  const state = useStateCard();
  let loggedUser = getUser();
  let totalPrice = state.reduce((prev, curr) => { return parseInt(prev) + parseInt(curr.foodPrice) }, [0]);
  let [getMyOrder,responseInfo]=useGetOrderMutation(loggedUser);

  useEffect(()=>{
      const result=await getMyOrder(loggedUser);
      
  })


  return (<>


    <div className="profile-right col-div mt-5 bg-secondary " id="myorder">
      {
        (state.length != 0) ?
          <>
            <table className="table-div mt-5 ">
              <caption className="text-white text-center font-weight-bold">My Order</caption>
              <thead>

                <tr>
                  <th>OrderID</th>
                  <th>FoodName</th>
                  <th>Quantity</th>
                  <th>Shape</th>
                  
                </tr>
              </thead>
              <tbody>
                {

                  state.map((item, i) => {
                    return (
                      <tr>
                        <td>{i + 1}</td>
                        <td>{item.foodName}</td>
                        <td>{item.foodQty}</td>
                        <td>{item.foodSize}</td>

                      </tr>
                    )
                  })

                }
              </tbody>
            </table>


          </> : <div className="text-white text-center h1">MyOrder is Empty </div>
      }
    </div>


  </>)
}
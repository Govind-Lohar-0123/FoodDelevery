import react from "react";
import { NavLink } from "react-router-dom";
import { useStateCard, useDispatchCard } from "../CardProvider.js";
import { useAddOrderMutation } from "../../../services/orderSlice.js";
export default function MyOrder() {

  const state = useStateCard();
  const cardDispatch = useDispatchCard();
  const addOrderDispatch= useAddOrderMutation();
  let totalPrice = 0;
  console.log(state);

  const handleDelete = (e, removeId) => {
    e.preventDefault();
    cardDispatch({ type: "DELETE", removeId });
  }

  const addOrderHandle=(e)=>{
    e.preventDefault();
    addOrderDispatch({order_data:state});
    console.log("Successfull");
  }


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
                  <th>Action</th>
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

                  <td>
                    {/* <button className="btn btn-yellow "><i class="fa-solid fa-trash"></i></button> */}
                    <NavLink to="#" className="btn btn-danger " onClick={(e) => handleDelete(e, i)}><i className="fa-2x fa-solid d-block fa-trash text-white"></i></NavLink>

                  </td>

                </tr>
                )
            })
            
          }

              </tbody>
            </table>
            <p className="text-white mt-5 h2" >Total Price :- {totalPrice}/</p>
            <button className="btn btn-primary mt-2" onClick={addOrderHandle}>Checkout</button>
          </> : <div className="text-white text-center h1">Card is Empty </div>
      }
    </div>


  </>)
}
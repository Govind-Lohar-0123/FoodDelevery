import react from "react";
import foodbg1 from "../../images/foodbg1.jpg";
import { NavLink, Outlet } from "react-router-dom";


export default function ProfileDash() {

  return (<>
    <div className="row-div " id="dashboard">
      <aside className="profile-dash  col-div  bg-secondary ">
        <div><img src={foodbg1} alt="" className="d-block " /></div>
        <nav className="mt-5">
          <ul>
            <li><i className="fa-solid fa-user fa-2x "></i><NavLink to="/profile">Profile</NavLink></li>
            <li><i className="fa-solid fa-user fa-2x "></i><NavLink to="/myorder">MyOrder</NavLink></li>
            
          </ul>
        </nav>
      </aside>
      <Outlet/>
    </div>

  </>)
}
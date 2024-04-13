import React, { useState } from "react";
import "../../css/auth.css";
import { useDispatch} from "react-redux";
import { setToken, getToken } from "./tokenAction";
import { useGetUserQuery, useUserLoginMutation } from "../../../features/api/apiSlice";
import { useNavigate } from "react-router-dom";
console.log("login")
export default function Login() {
    const [user, setUser] = useState({email: "", password: ""});
    const [isError, setError] = useState({ msg: "", type: "", success: false });
    const [login, responseInfo] = useUserLoginMutation();
    const navigate=useNavigate();
    console.log("login")
   

    // USER LOGIN SET

    
    // -------------Handles----------------//
    const inputHandle = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        for (let data in user) {
            if (user[data] == "") {
                setError({ msg: "Please Fill All Field...!", success: true });
                return;
            }
        }
        const newUser = new FormData();
        for (let data in user) {
            newUser.append(data + "", user[data]);
        }
        const token = getToken();
        const actualData = { ...user, token };

        const result = await login(actualData);
        console.log(result);
        // store token
        if (result.data.status) {
            setToken(result.data.token);
            localStorage.setItem("user",user.email);
            console.log(user.email);
            navigate("/");
        }
        //set result
        setError({ msg: result.data.msg, success: true });
       
        document.querySelector("#login").classList.add("d-none");
    }


    //Component render
    return (
        <>
            <div className="modal-div bg-secondary d-none " id="login">
                <h2 className="text-white font-weight-bold text-center ">LOGIN</h2>
                <form action="" className="login-form">

                    <div className="field-group">
                        <label htmlFor="email">Email :-</label>
                        <input type="text" name="email" value={user.email} onChange={inputHandle} placeholder="Enter User Email..." />
                    </div>
                    <div className="field-group">
                        <label htmlFor="password">Password :-</label>
                        <input type="text" value={user.password} onChange={inputHandle} name="password" placeholder="Enter User Password..." />
                    </div>

                    <div>
                        <button className="btn btn-primary signup font-weight-bold mx-auto d-block" onClick={handleSubmit}>Login</button>
                        <button className="btn btn-danger signup font-weight-bold close-login mx-auto d-block">Close</button>
                    </div>
                    {
                        (isError.success) ? <div className="alert alert-dark  ">{isError.msg}</div> :
                            ""
                    }
                </form>
            </div>
        </>
    )
}
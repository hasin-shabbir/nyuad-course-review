import { set } from "mongoose";
import React, { useState } from "react";
import {Navigate} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import "./register-form.css";


const RegisterForm = (props) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [redirect, setRedirect] = useState(null);

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (userName=== "" || password === ""){
            alert("ENTER MISSING FORM VALUES!");
        }
        else if (password.length<8){
            alert("password should be minimum 8 characters long");
        }
        else if(password !== password2) {
            alert("Entered passwords do not match!");
        }
        else{
            const params = {
                username: userName,
                password: password
            };
            axios.post("/register",params).then(
                function(response){
                    if (response.data.success){
                        setRedirect("/login");
                    }else{
                        alert(response.data.message);
                    }
                }
            )
        }
    }

    const handleUsername = (e) =>{
        setUserName(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handlePassword2 = (e) => {
        setPassword2(e.target.value);
    }

    return (
        <>
            {redirect ? 
            (<Navigate to={redirect} />) 
            :
            (<div>
            <h1>Register</h1>
                <form method="POST">
                    <div>Email: <input type="text" name="username" value={userName} onChange={handleUsername}/></div>
                    <div>Password: <input type="password" name="password" value={password} onChange={handlePassword}/></div>
                    <div>Re-enter password: <input type="password" name="password2" value={password2} onChange={handlePassword2}/></div>
                    <div><input type="submit" value="Register" onClick={handleSubmit}/></div>
                </form>
            </div>
            )
            }
            
        </>
    )
};

export default RegisterForm;
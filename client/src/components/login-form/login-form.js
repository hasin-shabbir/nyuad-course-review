import { set } from "mongoose";
import React, { useState } from "react";
import {Navigate} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import "./login-form.css";


const LoginForm = (props) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(null);

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (userName=== "" || password === ""){
            alert("ENTER MISSING FORM VALUES!");
        }
        else if (password.length<8){
            alert("password should be minimum 8 characters long");
        }
        else{
            const params = {
                username: userName,
                password: password
            };
            axios.post("/login",params).then(
                function(response){
                    if (response.data.success){
                        console.log(response.data.user);
                        setRedirect("/courses");
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

    return (
        <>
            {redirect ? 
            (<Navigate to={redirect} />) 
            :
            (<div>
            <h1>Login</h1>
                <form method="POST">
                    <div>Email: <input type="text" name="username" value={userName} onChange={handleUsername}/></div>
                    <div>Password: <input type="password" name="password" value={password} onChange={handlePassword}/></div>
                    <div><input type="submit" value="login" onClick={handleSubmit}/></div>
                </form>
            </div>
            )
            }
            <a href="/register">New user? Register instead!</a>
            
        </>
    )
};

export default LoginForm;
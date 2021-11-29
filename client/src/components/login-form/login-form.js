import { set } from "mongoose";
import React, { useState } from "react";
import {Navigate} from "react-router-dom";
import axios from "axios";

import css from "./login-form.module.css";


const LoginForm = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(null);

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (email=== "" || password === ""){
            alert("ENTER MISSING FORM VALUES!");
        }
        else if (password.length<8){
            alert("password should be minimum 8 characters long");
        }
        else{
            const params = {
                email: email,
                password: password
            };
            axios.post("/login",params).then(
                function(response){
                    if (response.data.success){
                        localStorage.setItem("course-rev-user", response.data.user);
                        setRedirect("/courses");
                    }else{
                        alert(response.data.message);
                    }
                }
            )
        }
    }

    const handleEmail = (e) =>{
        setEmail(e.target.value);
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
                <form className={css.form} method="POST">
                    <div className={css.inputBlock}>Email: <input className={css.textInput} type="text" name="email" value={email} onChange={handleEmail}/></div>
                    <div className={css.inputBlock}>Password: <input className={css.passwordInput} type="password" name="password" value={password} onChange={handlePassword}/></div>
                    <div className={css.inputBlock}><input className={css.subBtn} type="submit" value="login" onClick={handleSubmit}/></div>
                </form>
            </div>
            )
            }
            <a href="/register">New user? Register instead!</a>
            
        </>
    )
};

export default LoginForm;
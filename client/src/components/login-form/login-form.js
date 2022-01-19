import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import {Navigate} from "react-router-dom";
import axios from "axios";

import css from "./login-form.module.css";


const LoginForm = (props) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(null);

    useEffect(()=>{
        const token = localStorage.getItem("course-rev-token");
        if (token) {
          setRedirect("/courses");
        }
    },[]);

    const handleLogin = (e)=>{
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
                        localStorage.setItem("course-rev-user", response.data.user.username);
                        localStorage.setItem("course-rev-email", response.data.user.email);
                        localStorage.setItem("course-rev-token", response.data.user.token);
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
                <form className={css.form} method="POST" onSubmit={handleSubmit(handleLogin)}>
                    <div className={css.inputBlock}>
                        Your Email: <input {...register('email', {
                                    required: true, 
                                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                })
                            } 
                            className={css.textInput} type="text" name="email" value={email} onChange={handleEmail} placeholder="nyu.edu only"/>
                        {errors.email && <p className={css.error}>Invalid or missing email.</p>}
                    </div>
                    <div className={css.inputBlock}>
                        Password: <input {...register('password', {required: true,minLength: 8})} className={css.passwordInput} type="password" name="password" value={password} onChange={handlePassword}  placeholder="minimum 8 characters"/>
                        {errors.password && <p className={css.error}>Invalid or missing password.</p>}
                    </div>
                    <div className={css.inputBlock}><input className={css.subBtn} type="submit" value="Login"/></div>
                </form>
            </div>
            )
            }
            <a href="/register">New user? Register instead!</a>
        </>
    )
};

export default LoginForm;
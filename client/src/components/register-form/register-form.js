import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import {Navigate} from "react-router-dom";
import axios from "axios";

import css from "./register-form.module.css";


const RegisterForm = (props) => {

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm();

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [redirect, setRedirect] = useState(null);

    useEffect(()=>{
        const token = localStorage.getItem("course-rev-token");
        if (token) {
          setRedirect("/courses");
        }
    },[]);

    const handleRegister = (e)=>{
        if (userName=== "" || password === "" || email === ""){
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
                email: email,
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

    const handleEmail = (e) =>{
        setEmail(e.target.value);
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
                <form className={css.form} method="POST" onSubmit={handleSubmit(handleRegister)}>
                    <div className={css.inputBlock}>
                        Username: <input {...register('username', {required: true})} className={css.textInput} type="text" name="username" value={userName} onChange={handleUsername} placeholder="johndoe123"/>
                        {errors.username && <p className={css.error}>Username is required.</p>}
                    </div>
                    <div className={css.inputBlock}>
                        Email: <input {...register('email', {
                                    required: true, 
                                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                })
                            } 
                            className={css.textInput} type="text" name="email" value={email} onChange={handleEmail} placeholder="nyu.edu only"/>
                        {errors.email && <p className={css.error}>Invalid or missing email.</p>}
                    </div>
                    <div className={css.inputBlock}>
                        Password: <input {...register('password', {required: true,minLength: 8})} className={css.passwordInput} type="password" name="password" value={password} onChange={handlePassword} placeholder="minimum 8 characters"/>
                        {errors.password && <p className={css.error}>Invalid or missing password.</p>}
                    </div>
                    <div className={css.inputBlock}>
                        Re-enter password: <input {...register("password2", {
                            required: "Please confirm password!",
                            validate: {
                                matchesPreviousPassword: (value) => {
                                    const { password } = getValues();
                                    return password === value || 'Entered passwords do not match!';
                                }
                            }
                        })}
                        className={css.passwordInput} type="password" name="password2" value={password2} onChange={handlePassword2}  placeholder="passwords must match"/>
                        {errors.password2 && (
                            <p className={css.error}>
                                {errors.password2.message}
                            </p>
                        )}
                    </div>
                    <div className={css.inputBlock}><input className={css.subBtn} type="submit" value="Register"/></div>
                </form>
            </div>
            )
            }
            
        </>
    )
};

export default RegisterForm;
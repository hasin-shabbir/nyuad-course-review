import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import {Navigate} from "react-router-dom";
import axios from "axios";

import Headerbar from "../headerbar/headerbar";

import css from "./userinfo-form.module.css";

const UserInfoForm = (props) => {

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [redirect, setRedirect] = useState(null);

    useEffect(()=>{
        const token = localStorage.getItem("course-rev-token");
        setUserName(localStorage.getItem("course-rev-user"));
        if (!token) {
          setRedirect("/");
        }
    },[]);

    const handleNameUpdate = (e)=>{
        if (userName=== "" || currentPassword === ""){
            alert("ENTER MISSING FORM VALUES!");
        }
        else if (currentPassword.length<8){
            alert("password should be minimum 8 characters long");
        }
        else{
            const params = {
                username: userName,
                password: currentPassword
            };
            const reqToken = localStorage.getItem("course-rev-token");
            const config = {
                headers: {
                    "x-access-token": reqToken
                }
            };
            axios.post("/updateUsername",params, config).then(
                function(response){
                    if (response.data.success){
                        localStorage.setItem("course-rev-user", response.data.user.username);
                        localStorage.setItem("course-rev-email", response.data.user.email);
                        localStorage.setItem("course-rev-token", response.data.user.token);
                        window.location.reload(false);
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

    const handleCurrentPassword = (e) => {
        setCurrentPassword(e.target.value);
    }

    return (
        <>
            <>
                {redirect ? 
                (<Navigate to={redirect} />) 
                :
                (<div>
                    <Headerbar />
                    <h1>Change Username</h1>
                    <form className={css.form} method="POST" onSubmit={handleSubmit(handleNameUpdate)}>
                        <div className={css.inputBlock}>
                            Username: <input {...register('username', {required: true})} className={css.textInput} type="text" name="username" value={userName} onChange={handleUsername} placeholder="johndoe123"/>
                            {errors.username && <p className={css.error}>Username is required.</p>}
                        </div>
                        {/* <div className={css.inputBlock}>
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
                        </div> */}
                        <div className={css.inputBlock}>
                            Enter Current Password: <input {...register('currentPassword', {required: true,minLength: 8})} className={css.passwordInput} type="password" name="currentPassword" value={currentPassword} onChange={handleCurrentPassword} placeholder="minimum 8 characters"/>
                            {errors.currentPassword && <p className={css.error}>Invalid or missing password.</p>}
                        </div>
                        <div className={css.inputBlock}><input className={css.subBtn} type="submit" value="Update Username"/></div>
                    </form>
                </div>
                )
                }
                
            </>
        </>
    )
};

export default UserInfoForm;
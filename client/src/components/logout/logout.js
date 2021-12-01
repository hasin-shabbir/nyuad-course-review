import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

const Logout = (props) => {

    const [redirect,setRedirect] = useState(null);

    const executeLogout = () => {
        localStorage.removeItem("course-rev-token");
        localStorage.removeItem("course-rev-user");
        localStorage.removeItem("course-rev-email");
        setRedirect("/");
    };

    return (
        <>
            {redirect ? (
                <Navigate to={redirect} />
            ) : (
                <LogoutBtn 
                    type="submit" 
                    value="LOGOUT"
                    onClick={executeLogout}    
                />
            )}
        </>
    )
}

const LogoutBtn = styled.input`
    background-color: white;
    border: 1px solid #57068c;
    color: #57068c;
    padding: 6px 12px;
    max-height: 56px;
    align-self: center;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    &:hover{
        background-color: #57068c;
        color: white;
    }
`;


export default Logout;
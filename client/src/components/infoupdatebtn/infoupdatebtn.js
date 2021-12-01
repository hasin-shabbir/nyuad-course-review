import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

const InfoUpdateBtn = (props) => {

    const [redirect,setRedirect] = useState(null);

    const handleClick = () => {
        if (window.location.pathname==="/updateUserInfo"){
            window.location.reload(false);
            return;
        }
        setRedirect("/updateUserInfo");
    };

    return (
        <>
            {redirect ? (
                <Navigate to={redirect} />
            ) : (
                <Button 
                    type="submit" 
                    value="Update Username"
                    onClick={handleClick}    
                />
            )}
        </>
    )
}

const Button = styled.input`
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


export default InfoUpdateBtn;
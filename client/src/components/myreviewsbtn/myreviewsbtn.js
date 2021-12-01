import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

const MyReviewsBtn = (props) => {

    const [redirect,setRedirect] = useState(null);

    const handleClick = () => {
        setRedirect("/user-reviews");
    };

    return (
        <>
            {redirect ? (
                <Navigate to={redirect} />
            ) : (
                <Button 
                    type="submit" 
                    value="My Reviews"
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


export default MyReviewsBtn;
import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { useLocation, Navigate } from "react-router-dom";

import { 
    Container, 
    Row,
    Col1,
    FormShower
} from "../../containers/rootContainers";
import CourseReviewForm from "../coursereview-form/coursereview-form";
import CourseReviewItem from "../coursereview-item/coursereview-item";
import Headerbar from "../headerbar/headerbar";
import Backbutton from "../backbutton/backbutton";

const UserReviews = (props) =>{
    const location = useLocation();
    const courseCodePath = localStorage.getItem("course-rev-email");

    const [addNewReviewDisplay, setAddNewReviewDisplay] = useState(false);
    const [reviews, setReviews] = useState({});
    const [numSubmissions, setNumSubmissions] = useState(0);
    const [courseName, setCourseName] = useState("");
    const [tokenValid, setTokenValid] = useState(true);

    const handleFormToggle = () =>{
        setAddNewReviewDisplay(!addNewReviewDisplay);
    }

    const [user,setUser] = useState(null);
    const [token, setToken] = useState(null);
    let reqToken;
    useEffect(() => {
        const loggedInUser = localStorage.getItem("course-rev-user");
        const token = localStorage.getItem("course-rev-token");
        reqToken = localStorage.getItem("course-rev-token");

        if (token) {
          const foundUser = loggedInUser;
          setUser(foundUser);
          setToken(token);
        }
    });

    const handleFormSubmit = (submitted) => {
        if (submitted){
            setAddNewReviewDisplay(false);
            setNumSubmissions(numSubmissions+1);
        }
    }

    const handleReviewEdit = (edited) => {
        setNumSubmissions(numSubmissions+1);
    }

    const fetchReviews = () => {
        fetch('/get-user-reviews',{
            headers: {
                "x-access-token": reqToken
            }
        })
        .then((res)=>(res.json()))
        .then((data)=>{
            if (data.success===false && data.tokenValid === false){
                setTokenValid(false);
            }else{
                setReviews(data);
            }
        });
    }

    useEffect(()=>{
        fetchReviews();
    },[numSubmissions]);

    return (
        <>
        {!tokenValid ? (
            <Navigate to="/login" />
        ): (
            <></>
        )}
        {token ? (
            <>
            <Headerbar />

            <Container>
                <Backbutton redirectLink="/courses" backName="Back to courses"/>
            </Container>
            {
                Object.keys(reviews).slice(0).reverse().map((rev, key)=>{
                    return (<CourseReviewItem
                        key={key}
                        username={`${reviews[rev].user} (${reviews[rev].user_email})`}
                        metrics={
                            {
                                quality: reviews[rev].review.quality,
                                difficulty: reviews[rev].review.difficulty,
                                grading: reviews[rev].review.grading,
                                workload: reviews[rev].review.workload
                            }
                        }
                        courseCode = {courseCodePath}
                        text={reviews[rev].review.description}
                        uniqueId={reviews[rev]._id}
                        handleEditOrDelete = {handleReviewEdit}
                        currentUser = {reviews[rev].currentUser ? reviews[rev].currentUser : false}
                    />)
                    })
            }
            </>
        ) : (
            <p><a href="/">Login</a> to access this page!</p>
        )}
        </>
    )
}

const CourseTitle = styled.h1`
    color: #57068c;
    text-align: center;
`;

export default UserReviews;
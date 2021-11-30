import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { 
    Container, 
    Row,
    Col1,
    FormShower
} from "../../containers/rootContainers";
import CourseReviewForm from "../coursereview-form/coursereview-form";
import CourseReviewItem from "../coursereview-item/coursereview-item";

const CourseReview = (props) =>{
    const location = useLocation();
    const courseCodePath = location.pathname.split('/')[2].replace("%20"," ");

    const [addNewReviewDisplay, setAddNewReviewDisplay] = useState(false);
    const [reviews, setReviews] = useState({});
    const [numSubmissions, setNumSubmissions] = useState(0);
    const [courseName, setCourseName] = useState("");

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
        fetch('/get-reviews/:'+courseCodePath,{
            headers: {
                "x-access-token": reqToken
            }
        })
        .then((res)=>(res.json()))
        .then((data)=>setReviews(data));
    }

    useEffect(()=>{
        token && fetch('/get-course-name/:'+courseCodePath)
        .then((res)=>(res.json()))
        .then((data)=>setCourseName(data.courseName));
    }, [token])

    useEffect(()=>{
        fetchReviews();
    },[numSubmissions]);

    return (
        <>
        {token ? (
            <>
            <h1>Currently logged in as: {user}!</h1>
            <Container>
                <Row>
                    <Col1>
                        <CourseTitle>{courseName}</CourseTitle>
                    </Col1>
                </Row>
                <Row>
                    <Col1>
                        <FormShower onClick={handleFormToggle}>
                            {addNewReviewDisplay ? "close form" : "add review"}
                        </FormShower>
                    </Col1>
                </Row>
                {
                    addNewReviewDisplay && (
                        <Row>
                            <Col1>
                                <CourseReviewForm type="new" courseCode = {courseCodePath} checkSubmit = {handleFormSubmit}/>
                            </Col1>
                        </Row>
                    )
                }

            </Container>
            {
                Object.keys(reviews).slice(0).reverse().map((rev, key)=>{
                    return (<CourseReviewItem
                        key={key}
                        username="random user"
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

export default CourseReview;
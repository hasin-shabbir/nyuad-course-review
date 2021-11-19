import React, {useState, useEffect} from "react";
import styled from "styled-components";

import { 
    Container, 
    Row,
    Col1,
    FormShower
} from "../../containers/rootContainers";
import CourseReviewForm from "../coursereview-form/coursereview-form";
import CourseReviewItem from "../coursereview-item/coursereview-item";

const CourseReview = (props) =>{
    const [addNewReviewDisplay, setAddNewReviewDisplay] = useState(false);
    const [reviews, setReviews] = useState({});
    const [numSubmissions, setNumSubmissions] = useState(0);

    const handleFormToggle = () =>{
        setAddNewReviewDisplay(!addNewReviewDisplay);
    }

    const [user,setUser] = useState(null);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("course-rev-user");
        if (loggedInUser) {
          const foundUser = loggedInUser;
          setUser(foundUser);
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
        fetch('/get-reviews')
        .then((res)=>(res.json()))
        .then((data)=>setReviews(data));
    }

    useEffect(()=>{
        fetchReviews();
    },[numSubmissions]);

    return (
        <>
        {user ? (
            <>
            <h1>Currently logged in as: {user}!</h1>
            <Container>
                <Row>
                    <Col1>
                        {/* TITLE TO BE REPLACED BASED ON URL */}
                        <CourseTitle>SAMPLE COURSE</CourseTitle>
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
                                <CourseReviewForm type="new" checkSubmit = {handleFormSubmit}/>
                            </Col1>
                        </Row>
                    )
                }

            </Container>
            {
                Object.keys(reviews).slice(0).reverse().map((rev, key)=>{
                    console.log(rev);
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
                        text={reviews[rev].review.description}
                        uniqueId={reviews[rev]._id}
                        handleEditOrDelete = {handleReviewEdit}
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
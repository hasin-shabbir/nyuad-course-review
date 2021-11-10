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
            {/* <CourseReviewItem 
                username="random user"
                metrics={
                    {
                        quality: 82,
                        difficulty: 76,
                        grading: 92,
                        workload: 80
                    }
                }
                text="This is a sample review. To make it a paragraph, using some random text.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum lorem quis nisl gravida sollicitudin ac non ipsum. In feugiat tincidunt pellentesque. Ut commodo ultricies massa, non interdum nisl ornare mattis. Pellentesque eget ipsum ligula. Nulla tincidunt faucibus posuere. In quam lectus, vehicula nec tellus id, lobortis accumsan purus. In tempor augue a dolor tincidunt ultrices. Pellentesque maximus dignissim dapibus."
            /> */}
        </>
    )
}

const CourseTitle = styled.h1`
    color: #57068c;
    text-align: center;
`;

export default CourseReview;
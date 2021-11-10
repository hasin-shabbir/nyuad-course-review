import React, {useState} from "react";
import styled from "styled-components";

import { 
    Container, 
    Row,
    Col1
} from "../../containers/rootContainers";
import CourseReviewForm from "../coursereview-form/coursereview-form";
import CourseReviewItem from "../coursereview-item/coursereview-item";

const CourseReview = (props) =>{
    const [addNewReviewDisplay, setAddNewReviewDisplay] = useState(false);

    const handleFormToggle = () =>{
        setAddNewReviewDisplay(!addNewReviewDisplay);
    }
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
                                <CourseReviewForm type="new"/>
                            </Col1>
                        </Row>
                    )
                }

            </Container>
            <CourseReviewItem 
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
            />
        </>
    )
}

const CourseTitle = styled.h1`
    color: #57068c;
    text-align: center;
`;

const FormShower = styled.p`
    display: inline-block;
    text-transform: capitalize;
    padding: 10px;
    margin: 5px auto;
    color: #57068c;
    cursor: pointer;
    border: 1px solid #57068c;
    &:hover{
        background-color: #57068c;
        color: white;
    }
`;

export default CourseReview;
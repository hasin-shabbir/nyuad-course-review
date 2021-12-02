import React, {useState} from "react";
import styled from "styled-components";

import { 
    Container, 
    Row,
    Col1,
    Col4,
    FormShower
} from "../../containers/rootContainers";

import CourseReviewForm from "../coursereview-form/coursereview-form";

const CourseReviewItem = (props) =>{
    const [editFormDisplay, setEditFormDisplay] = useState(false);

    const handleFormToggle = () =>{
        setEditFormDisplay(!editFormDisplay);
    }

    const handleFormSubmit = (submitted) => {
        if (submitted){
            setEditFormDisplay(false);
            props.handleEditOrDelete(true);
        }
    }

    return (
        <Container>
            <Row>
                <Col1>
                    <ReviewCard>
                        <Col1>

                            {props.courseCodeDisplay ? (
                                <ReviewRow>
                                    <Col1>
                                        <CourseCodeDiv>Course: {" "+props.courseCode}</CourseCodeDiv>
                                    </Col1>
                                </ReviewRow>) : (
                                <ReviewRow>
                                    <Col1>
                                        <UserName>Posted by: {" "+props.username}</UserName>
                                    </Col1>
                                </ReviewRow>
                            )
                            }

                            <ReviewRow>
                                {Object.keys(props.metrics)
                                    .map((metric,key)=>(
                                        <Col4>
                                            <Metric key={key}>
                                                {metric+": "}
                                                <MetricNum>{props.metrics[metric]}</MetricNum>
                                            </Metric>
                                        </Col4>
                                    ))
                                }
                            </ReviewRow>

                            <ReviewRow>
                                <Col1>
                                    <ReviewText>
                                        {props.text}
                                    </ReviewText>
                                </Col1>
                            </ReviewRow>

                            {props.currentUser && (
                                <ReviewRow>
                                    <Col1>
                                        <FormShower onClick={handleFormToggle}>
                                            {editFormDisplay ? "close form" : "edit review"}
                                        </FormShower>        
                                    </Col1>
                                </ReviewRow>
                                )
                            }
                            {
                                editFormDisplay && (
                                    <Row>
                                        <Col1>
                                            <CourseReviewForm reviewId={props.uniqueId} courseCode = {props.courseCode} type="edit" checkSubmit = {handleFormSubmit}/>
                                        </Col1>
                                    </Row>
                                )
                            }
                            {props.currentUser && (
                                <Row>
                                    <Col1>
                                        <CourseReviewForm reviewId={props.uniqueId} type="delete" checkSubmit = {handleFormSubmit}/>
                                    </Col1>
                                </Row>
                            )}
                            
                        </Col1>
                    </ReviewCard>
                </Col1>
            </Row>
        </Container>
    )
}


const ReviewCard = styled.div`
    cursor: default;
    display: flex;
    border: 1px solid purple;
    min-height: 200px;
    background-color: #dedede;
    padding: 2px 10px;
    margin-bottom: 10px;
`;

const ReviewRow = styled.div`
    display: flex;
`;

const UserName = styled.p`
    color: black;
    font-weight: bold;
    text-align: left;
    border-bottom: 1px solid grey;
    margin: 5px 0;
`;

const CourseCodeDiv = styled.p`
    color: black;
    font-weight: bold;
    text-align: left;
    border-bottom: 1px solid grey;
    margin: 5px 0;
`;

const Metric = styled.p`
    font-size: 15px;
    text-transform: capitalize;
    margin: 0;
    border-bottom: 1px solid grey;
`;

const MetricNum = styled.span`
    font-weight: bold;
`;

const ReviewText = styled.p`
    font-size: 15px;
`;

export default CourseReviewItem;
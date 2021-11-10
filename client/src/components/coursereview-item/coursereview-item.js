import React from "react";
import styled from "styled-components";

import { 
    Container, 
    Row,
    Col1,
    Col4
} from "../../containers/rootContainers";

const CourseReviewItem = (props) =>{
    return (
        <Container>
            <Row>
                <Col1>
                    <ReviewCard>
                        <Col1>

                            <ReviewRow>
                                <Col1>
                                    <UserName>Posted by: {" "+props.username}</UserName>
                                </Col1>
                            </ReviewRow>

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
                                <ReviewText>
                                    {props.text}
                                </ReviewText>
                            </ReviewRow>
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
`;

const ReviewRow = styled.div`
    display: flex;
`;

const UserName = styled.p`
    color: black;
    text-transform: capitalize;
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
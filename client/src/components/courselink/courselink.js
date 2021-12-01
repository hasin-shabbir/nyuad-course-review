import React from "react";
import styled from "styled-components";

import { 
    Container, 
    Row,
    Col1
} from "../../containers/rootContainers";

const Courselink = (props) =>{
    

    return (
        <>
            <Container>
                <Row>
                    <Col1>
                        {/* href to be determined based on exact course */}
                        <CourseCard href={"/course-review/"+props.courseCode}>
                            <CourseTitle>
                                {props.courseName}
                            </CourseTitle>
                        </CourseCard>
                    </Col1>
                </Row>
            </Container>
        </>
    )
}


const CourseTitle = styled.span`
    color: #474645;
    font-size: 20px;
    font-weight: lighter;
    line-height: 1.625rem;
    text-transform: capitalize;    
`;

const CourseCard = styled.a`
    text-decoration: none;
    cursor: pointer;
    display: block;
    border: 1px solid grey;
    padding: 8px 24px;
    text-align: left;
    :hover ${CourseTitle}{
        color: purple;
    }
`;

export default Courselink;
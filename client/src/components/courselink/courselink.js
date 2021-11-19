import React,{useState,useEffect} from "react";
import styled from "styled-components";
import { Navigate } from "react-router-dom";

import { 
    Container, 
    Row,
    Col1
} from "../../containers/rootContainers";

const Courselink = (props) =>{
    const [user,setUser] = useState(null);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("course-rev-user");
        if (loggedInUser) {
          const foundUser = loggedInUser;
          setUser(foundUser);
        }
      });

    return (
        <>
            <h1>Hello {user}!</h1>
            <Container>
                <Row>
                    <Col1>
                        {/* href to be determined based on exact course */}
                        <CourseCard href="/sample-course">
                            <CourseCode>
                                {props.courseCode+" "}
                            </CourseCode>
                            
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

const CourseCode = styled(CourseTitle)`   
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
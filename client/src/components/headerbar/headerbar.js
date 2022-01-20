import React, {useEffect, useState} from "react";
import styled from "styled-components";

import {
    Container,
    Row
} from "../../containers/rootContainers";

import Logout from "../logout/logout";
import CourseListButton from "../courselistbutton/courselistbutton";
import MyReviewsBtn from "../myreviewsbtn/myreviewsbtn";
import InfoUpdateBtn from "../infoupdatebtn/infoupdatebtn";

const Headerbar = (props) => {
    const [user,setUser] = useState(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("course-rev-user");
        const token = localStorage.getItem("course-rev-token");
        if (token) {
          const foundUser = loggedInUser;
          setUser(foundUser);
        }
    },[]);

    return (
        <>  
            <HeaderDiv>
                <HeaderContainer>
                    <HeaderRow >
                        <UserDisplay>
                            Hello, {user}!
                        </UserDisplay>
                        <WebsiteTitle>NYUAD COURSE REVIEW</WebsiteTitle>
                        <Row>
                            <PaddedDiv>
                                <CourseListButton/>
                            </PaddedDiv>
                            <PaddedDiv>
                                <MyReviewsBtn/>
                            </PaddedDiv>
                            <PaddedDiv>
                                <InfoUpdateBtn/>
                            </PaddedDiv>
                            <PaddedDiv>
                                <Logout/>
                            </PaddedDiv>
                        </Row>
                        
                    </HeaderRow>
                </HeaderContainer>
            </HeaderDiv>
        </>
    )
};

const UserDisplay = styled.p`
    font-size: 20px;
    text-transform: capitalize;
`;

const PaddedDiv = styled.div`
    padding: 0px 5px;
    display: flex;
`;

const WebsiteTitle = styled.p`
    font-size: 20px;
    color: #57068c;
    text-align: center;
`

const HeaderDiv = styled.div`
    border-bottom: 1px solid grey;
    margin-bottom: 10px;
    box-shadow: 1px 2px 2px grey;
`;

const HeaderContainer = styled(Container)`
    padding: 10px 0;
`;

const HeaderRow = styled(Row)`
    justify-content: space-between;
`;

export default Headerbar;
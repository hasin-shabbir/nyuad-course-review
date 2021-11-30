import React, {useEffect, useState} from "react";
import styled from "styled-components";

import {
    Container,
    Row
} from "../../containers/rootContainers";

import Logout from "../logout/logout";

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

                        <Logout />
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

const HeaderDiv = styled.div`
    border-bottom: 1px solid grey;
    margin-bottom: 10px;
`;

const HeaderContainer = styled(Container)`
    padding: 10px 0;
`;

const HeaderRow = styled(Row)`
    justify-content: space-between;
`;

export default Headerbar;
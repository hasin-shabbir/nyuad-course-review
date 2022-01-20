import React, {useEffect, useState} from "react";
import styled from "styled-components";

import {
    Container,
    Row
} from "../../containers/rootContainers";

import css from "./logo-header.module.css";

const LogoHeader = (props) => {
    return (
        <HeaderWrapper>
            <Container>
                <Row className={css.justifyCenter}>
                    <LogoText className={css.textCenter}>
                        NYUAD COURSE REVIEW
                    </LogoText>
                </Row>
            </Container>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.div`
    width: 100%;
    background-color: white;
    margin-bottom: 50px;
`;

const LogoText = styled.h2`
    text-transform: capitalize;
    font-size: 28px;
    margin: 18px 0;
    color: #57068c;
    user-select: none;
`;

export default LogoHeader;
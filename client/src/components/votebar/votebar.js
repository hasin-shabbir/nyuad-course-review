import React from "react";
import styled from "styled-components";

import Upvote from "../upvote/upvote";
import Downvote from "../downvote/downvote";

import css from "./votebar.module.css";

const Votebar = (props) => {
    return (
        <div className={css.Flex}>
            <IconWrapper>
                <Upvote />
            </IconWrapper>
            <IconWrapper>
                <Downvote />
            </IconWrapper>
            <IconWrapper>
                <CountWrapper>
                    <CountText>
                        -10
                    </CountText>
                </CountWrapper>
            </IconWrapper>
        </div>
        
    );
}

const IconWrapper = styled.div`
    display: inline-block;
    margin: 0 4px 0 0;
`;

const CountWrapper = styled.div`
    padding: 2px;
    display: inline-block;
    user-select: none;
`;

const CountText = styled.p`
    margin: 0;
    font-weight: bold;
`;

export default Votebar;

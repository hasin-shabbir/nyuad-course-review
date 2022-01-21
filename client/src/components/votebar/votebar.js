import React, {useState,useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

import Upvote from "../upvote/upvote";
import Downvote from "../downvote/downvote";

import css from "./votebar.module.css";

const Votebar = (props) => {

    const [voteClick,setVoteClick] = useState(0);
    const [voteCount, setVoteCount] = useState(props.voteCount);
    const [currentVote, setCurrentVote] = useState(props.currentVote);

    const handleUpvote = () => {
        const reqToken = localStorage.getItem("course-rev-token");

        const params = {
            rev_id: props.reviewId,
            voteType: 'upvote'
        };

        const config = {
            headers: {
                "x-access-token": reqToken
            }
        };

        axios.post('/vote',params, config)
        .then(function (response) {
            if (response.data.success !== null && response.data.success !== undefined && response.data.success === false){
                console.log(response.data.message);
            }
            else{
                setCurrentVote(response.data.currentVote);
                setVoteCount(response.data.votes);
                setVoteClick(voteClick+1);
            }
        })
        .catch(function (err) {
            console.log(err);
        });
    };
    
    const handleDownvote = () => {
        const reqToken = localStorage.getItem("course-rev-token");

        const params = {
            rev_id: props.reviewId,
            voteType: 'downvote'
        };

        const config = {
            headers: {
                "x-access-token": reqToken
            }
        };

        axios.post('/vote',params, config)
        .then(function (response) {
            if (response.data.success !== null && response.data.success !== undefined && response.data.success === false){
                console.log(response.data.message);
            }
            else{
                setCurrentVote(response.data.currentVote);
                setVoteCount(response.data.votes);
                setVoteClick(voteClick+1);
            }
        })
        .catch(function (err) {
            console.log(err);
        });
    }

    return (
        <div className={css.Flex}>
            <IconWrapper>
                <Upvote onClick = {handleUpvote} currentVote={currentVote === 'up' ? true : false}/>
            </IconWrapper>
            <IconWrapper>
                <Downvote onClick = {handleDownvote} currentVote={currentVote === 'down' ? true : false}/>
            </IconWrapper>
            <IconWrapper>
                <CountWrapper>
                    <CountText>
                        {voteCount}
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

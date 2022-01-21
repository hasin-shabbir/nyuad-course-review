import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { VoteWrapper } from "../../containers/rootContainers";

import css from "./upvote.module.css";

const Upvote = (props) => {
    return (
        <VoteWrapper onClick={props.onClick} className={css.Wrapper}>
            <FontAwesomeIcon icon={faChevronUp}  className={props.currentVote === true ? css.DarkGreen : css.Green}/>
        </VoteWrapper>
    );
}

export default Upvote;
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { VoteWrapper } from "../../containers/rootContainers";

import css from "./upvote.module.css";

const Upvote = (props) => {
    return (
        <VoteWrapper>
            <FontAwesomeIcon icon={faChevronUp}  className={css.Green}/>
        </VoteWrapper>
    );
}

export default Upvote;

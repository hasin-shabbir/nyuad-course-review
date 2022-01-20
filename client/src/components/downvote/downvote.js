import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { VoteWrapper } from "../../containers/rootContainers";

import css from "./downvote.module.css";

const Downvote = (props) => {
    return (
        <VoteWrapper>
            <FontAwesomeIcon icon={faChevronDown} className={css.Red}/>
        </VoteWrapper>
    );
}

export default Downvote;

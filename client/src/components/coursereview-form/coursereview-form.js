import { set } from "mongoose";
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import "./coursereview-form.css";

import { 
    Container, 
    Row,
    Col1
} from "../../containers/rootContainers";

function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

const CourseReviewForm = (props) =>{
    const [quality,setQuality] = useState('');
    const [difficulty,setDifficulty] = useState('');
    const [grading,setGrading] = useState('');
    const [workload,setWorkload] = useState('');
    const [textReview, setTextReview] = useState('');
  
    const handleRating = (e) => {
        e.preventDefault();
        let val;
        //check for validity of input type
        if (isNumeric(e.target.value)){
            val = parseInt(e.target.value);
        }else if (e.target.value ===""){
            val = e.target.value;
        }else{
            return;
        }

        //enforce numeric bounds on rating
        if (val>100 || val<0){
            return;
        }

        //set relevant rating value
        if (e.target.name === 'quality'){
            setQuality(val);
        }
        else if (e.target.name === 'difficulty'){
            setDifficulty(val);
        }
        else if (e.target.name === 'grading'){
            setGrading(val);
        }
        else if (e.target.name === 'workload'){
            setWorkload(val);
        }
    }
    const handleTextChange = (e) => {
        e.preventDefault();
        setTextReview(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const params = {
            quality: quality,
            difficulty: difficulty,
            grading: grading,
            workload: workload,
            textReview: textReview
        }
        
        let emptyField = false;

        Object.keys(params).map((field)=>{
            if (field==='' && !emptyField){
                emptyField = true;
            }
        })

        if (emptyField){
            alert("PLEASE FILL ALL FORM FIELDS!");
            return;
        }

        axios.post('/add-review',params)
        .then(function (response) {
            console.log(response.data);
            props.checkSubmit(true);
        })
        .catch(function (err) {
            console.log(err);
            props.checkSubmit(false);
        });
    }

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Quality:
          <input
            name='quality'
            type="text"
            value={quality}
            onChange={handleRating}
          />
        </label>

        <label>
          Difficulty:
          <input
            name='difficulty'
            type="text"
            value={difficulty}
            onChange={handleRating}
          />
        </label>

        <label>
          Grading:
          <input
            name='grading'
            type="text"
            value={grading}
            onChange={handleRating}
          />
        </label>

        <label>
          Workload:
          <input
            name='workload'
            type="text"
            value={workload}
            onChange={handleRating}
          />
        </label>

        <label>
            Review Text: 
            <textarea
                placeholder="enter review text here"
                onChange = {handleTextChange}    
                value = {textReview}
            />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
}

export default CourseReviewForm;
import React, { useState } from "react";
import axios from "axios";

import css from "./coursereview-form.module.css";

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
        let params = {};
        if (props.type ==="delete"){
            params = {
                rev_id: props.reviewId
            }
        }
        else if (props.type==="new"){
            params = {
                quality: quality,
                difficulty: difficulty,
                grading: grading,
                workload: workload,
                textReview: textReview
            }
        }
        else if (props.type==="edit"){
            params = {
                rev_id: props.reviewId,
                quality: quality,
                difficulty: difficulty,
                grading: grading,
                workload: workload,
                textReview: textReview
            }
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

        if (props.type==="new"){
            axios.post('/add-review/'+props.courseCode,params)
            .then(function (response) {
                console.log(response.data);
                props.checkSubmit(true);
            })
            .catch(function (err) {
                console.log(err);
                props.checkSubmit(false);
            });
        }
        else if (props.type ==="edit"){
            axios.post('/edit-review/'+props.courseCode,params)
            .then(function (response) {
                console.log(response.data);
                props.checkSubmit(true);
            })
            .catch(function (err) {
                console.log(err);
                props.checkSubmit(false);
            });
        }
        else if (props.type ==="delete"){
            axios.post('/delete-review',params)
            .then(function (response) {
                console.log(response.data);
                props.checkSubmit(true);
            })
            .catch(function (err) {
                console.log(err);
                props.checkSubmit(false);
            });
        }
       
    }

    return (
    <>
        
        <form onSubmit={handleSubmit} className={css.form}>
            
            {props.type!=="delete" && (
                <>
                    <label>
                        Quality:
                        <input
                            name='quality'
                            type="text"
                            value={quality}
                            onChange={handleRating}
                            className={css.textInput}
                        />
                    </label>

                    <label>
                        Difficulty:
                        <input
                            name='difficulty'
                            type="text"
                            value={difficulty}
                            onChange={handleRating}
                            className={css.textInput}
                        />
                    </label>

                    <label>
                        Grading:
                        <input
                            name='grading'
                            type="text"
                            value={grading}
                            onChange={handleRating}
                            className={css.textInput}
                        />
                    </label>

                    <label>
                        Workload:
                        <input
                            name='workload'
                            type="text"
                            value={workload}
                            onChange={handleRating}
                            className={css.textInput}
                        />
                    </label>

                    <label style={{display:"block"}}>
                        Review Text: 
                        <textarea
                            placeholder="enter review text here"
                            onChange = {handleTextChange}    
                            value = {textReview}
                            className={css.textareaInput}
                        />
                    </label>
                </>
            )}
                
            <input type="submit" className={css.subBtn} value={props.type === "new" ? "Submit review" : props.type} />
        </form>
          
    </>
    );
}

export default CourseReviewForm;
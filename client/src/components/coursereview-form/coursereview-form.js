import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";

import css from "./coursereview-form.module.css";

function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

const CourseReviewForm = (props) =>{

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [quality,setQuality] = useState('');
    const [difficulty,setDifficulty] = useState('');
    const [grading,setGrading] = useState('');
    const [workload,setWorkload] = useState('');
    const [textReview, setTextReview] = useState('');
    const [confirmDeleteState,setConfirmDeleteState] = useState(false);
    const [btnVal, setBtnVal] = useState("");

    useEffect(()=>{
        setBtnVal(props.type === "new" ? "Submit review" : props.type);
    },[]);
  
    const handleRating = (e) => {
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

    const handleFormSubmit = (e) => {
        let params = {};
        if (props.type ==="delete"){
            setBtnVal('Click again to confirm deletion');
            if (confirmDeleteState === false){
                setConfirmDeleteState(true);
                return;
            }
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

        const reqToken = localStorage.getItem("course-rev-token");

        if (props.type==="new"){
            const config = {
                headers: {
                    "x-access-token": reqToken
                }
            };
            axios.post('/add-review/'+props.courseCode,params, config)
            .then(function (response) {
                if (response.data.success !== null && response.data.success !== undefined && response.data.success === false){
                    alert(response.data.message);
                }
                props.checkSubmit(true);
            })
            .catch(function (err) {
                props.checkSubmit(false);
            });
        }
        else if (props.type === "edit"){
            const config = {
                headers: {
                    "x-access-token": reqToken
                }
            };
            axios.post('/edit-review/', params, config)
            .then(function (response) {
                if (response.data.success !== null && response.data.success !== undefined && response.data.success === false){
                    alert(response.data.message);
                }
                props.checkSubmit(true);
            })
            .catch(function (err) {
                props.checkSubmit(false);
            });
        }
        else if (props.type ==="delete"){
            const config = {
                headers: {
                    "x-access-token": reqToken
                }
            };
            axios.post('/delete-review',params, config)
            .then(function (response) {
                props.checkSubmit(true);
            })
            .catch(function (err) {
                props.checkSubmit(false);
            });
        }
       
    }

    return (
    <>
        
        <form onSubmit={handleSubmit(handleFormSubmit)} className={css.form}>
            
            {props.type!=="delete" && (
                <>
                    <label>
                        Quality:
                        <input
                            name='quality'
                            type="text"
                            placeholder="Between 0 and 100 inclusive"
                            className={css.textInput}
                            {...register('quality', {
                                required: true,
                                pattern : /^[0-9]+$/
                            })
                            }
                            value={quality}
                            onChange={handleRating}
                        />
                        {errors.quality && <p className={css.error}>Invalid or missing quality rating.</p>}
                    </label>

                    <label>
                        Difficulty:
                        <input
                            name='difficulty'
                            type="text"
                            placeholder="Between 0 and 100 inclusive"
                            className={css.textInput}
                            {...register('difficulty', {
                                required: true,
                                pattern : /^[0-9]+$/
                            })
                            }
                            value={difficulty}
                            onChange={handleRating}
                        />
                        {errors.difficulty && <p className={css.error}>Invalid or missing difficulty rating.</p>}
                    </label>

                    <label>
                        Grading:
                        <input
                            name='grading'
                            type="text"
                            placeholder="Between 0 and 100 inclusive"
                            className={css.textInput}
                            {...register('grading', {
                                required: true
                            })
                            }
                            value={grading}
                            onChange={handleRating}
                        />
                        {errors.grading && <p className={css.error}>Invalid or missing grading rating.</p>}
                    </label>

                    <label>
                        Workload:
                        <input
                            name='workload'
                            type="text"
                            placeholder="Between 0 and 100 inclusive"
                            className={css.textInput}
                            {...register('workload', {
                                required: true,
                                pattern : /^[0-9]+$/
                            })
                            }
                            value={workload}
                            onChange={handleRating}
                        />
                        {errors.workload && <p className={css.error}>Invalid or missing workload rating.</p>}
                    </label>

                    <label style={{display:"block"}}>
                        Review Text: 
                        <textarea
                            placeholder="enter review text here"
                            className={css.textareaInput}
                            {...register('reviewtext', {
                                required: true
                            })
                            }
                            onChange = {handleTextChange}    
                            value = {textReview}
                        />
                        {errors.reviewtext && <p className={css.error}>Missing review text.</p>}
                    </label>
                </>
            )}
                
            <input type="submit" className={css.subBtn} value={btnVal} />
        </form>
          
    </>
    );
}

export default CourseReviewForm;
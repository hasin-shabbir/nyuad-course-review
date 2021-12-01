import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';
import css from "./courselistbutton.module.css";

const CourseListButton = (props) =>{

    const [redirect, setRedirect] = useState(null);

    const handleClick = (e) =>{
        e.preventDefault();
        if (window.location.pathname==="/courses"){
            window.location.reload(false);
            return;
        }
        setRedirect("/courses");
    }

    return (
        <>
            {redirect ? (
                <Navigate to={redirect} />
            ): (
                <input type="submit" className={css.subBtn} value="Course List" onClick={handleClick}/>
            )}
        </>
    );
}

export default CourseListButton;
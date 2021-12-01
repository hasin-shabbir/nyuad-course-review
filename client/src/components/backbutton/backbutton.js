import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';
import css from "./backbutton.module.css";

const Backbutton = (props) =>{

    const [redirect, setRedirect] = useState(null);

    const handleClick = (e) =>{
        e.preventDefault();
        setRedirect(props.redirectLink);
    }

    return (
        <>
            {redirect ? (
                <Navigate to={redirect} />
            ): (
                <input type="submit" className={css.subBtn} value={props.backName} onClick={handleClick}/>
            )}
        </>
    );
}

export default Backbutton;
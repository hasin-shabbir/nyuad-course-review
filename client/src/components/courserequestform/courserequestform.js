import React, { useEffect,useState } from "react";
import { Navigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import axios from "axios";

import css from './courserequestform.module.css';
import { 
    Container,
    Row
} from "../../containers/rootContainers";

import Headerbar from "../headerbar/headerbar";

const Courserequestform = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [code,setCode] = useState("");
    const [redirect, setRedirect] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('course-rev-token');
        if (!token){
            setRedirect("/");
        }
    }, [])

    const handleFormSubmit = () =>{
        const params = {
            code: code
        };
        const reqToken = localStorage.getItem("course-rev-token");
        const config = {
            headers: {
                "x-access-token": reqToken
            }
        };
        axios.post('/request-course/',params, config)
        .then(function (response) {
            if (response.data.tokenValid !==null && response.data.tokenValid !== undefined && response.data.tokenValid===false){
                setRedirect("/");
                return;
            }
            if (response.data.success !== null && response.data.success !== undefined && response.data.success === false){
                alert(response.data.message);
            }else{
                setRedirect("/courses");
            }
        })
        .catch(function (err) {
            alert("error requesting course, try again later!");
        });
    }

    const handleCode = (e) =>{
        setCode(e.target.value);
    }

    return (
        <>
        {redirect ? (
            <Navigate to={redirect} />
        ): (
            <>
                <Headerbar />

                <Container> 
                    <Row>
                        <Row className={css.center}>
                            <form onSubmit={handleSubmit(handleFormSubmit)} className={css.form}>
                                <label className={css.textCenter}>
                                    Course code:
                                    <input
                                        name='code'
                                        type="text"
                                        placeholder="Strictly case sensitive as provided in nyuad course catalog"
                                        className={css.textInput}
                                        {...register('code', {
                                            required: true
                                        })
                                        }
                                        value={code}
                                        onChange={handleCode}
                                    />
                                    {errors.code && <p className={css.error}>Invalid or missing code.</p>}
                                </label>
                                <input type="submit" className={css.subBtn} value="Submit Request" />
                            </form>
                        </Row>
                        <Row>
                            <ul>
                                <li><b>For AIT graders: use the following one time codes test1, test2, test3, test4, test5, test6 to add these courses</b></li>
                                <li>A response may take some time depending on network speed, do not refresh or redirect from the page after submitting request.</li>
                                <li>On a request being approved, you will be redirected to the course list where you can then search for your course</li>
                                <li>On request being rejected, you will be alerted with the reason.</li>
                                <li>Enter course code exactly as listed for your course as listed on https://nyuad.nyu.edu/en/course-list.html</li>
                            </ul>
                        </Row>
                    </Row>
                </Container>
            </>
        )}
            
        </>
    )
}


export default Courserequestform;
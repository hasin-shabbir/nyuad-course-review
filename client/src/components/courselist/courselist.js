import React,{useState,useEffect} from "react";
import Courselink from "../courselink/courselink"
import SearchCourse from "../searchCourse/SearchCourse";
import Headerbar from "../headerbar/headerbar";

import css from "./courselist.module.css";

const CourseList = (props) => {
    const [success,setSuccess] = useState(true);
    const [courses,setCourses] = useState(null);
    const [allCourses, setAllCourses] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("course-rev-token"));

    useEffect(()=>{
        
        fetch('/get-courses',{
            headers: {
                "x-access-token": token
            }
        })
        .then((res)=>(res.json()))
        .then((data)=>{
            setSuccess(data.success);
            setCourses(data.courses);
            setAllCourses(data.courses);
        });
    },[]);

    const filterCourses = (searchParams,levelParams,keywordParams) => {
        setCourses(allCourses);
        const searchVals = [...searchParams];
        const levelVals = [...levelParams];
        const keywordVals = [...keywordParams];

        const newCourses = [];
        allCourses.forEach(initialCourse=>{
            const courseCopy = {};
            courseCopy.name = initialCourse.name;
            courseCopy.code = initialCourse.code;
            courseCopy.level = initialCourse.level;
            courseCopy.program = [...initialCourse.program]

            let metInitCriteria = false;
            
            if (//level and prog
                levelVals.length>0 &&
                searchVals.length>0 && 
                levelVals.includes(courseCopy.level.toString()) && 
                searchVals.filter(val=>courseCopy.program.includes(val)).length>0
            ){
                metInitCriteria = true;
            }
            else if ( //level only
                levelVals.length>0 &&
                searchVals.length===0 && 
                levelVals.includes(courseCopy.level.toString())
            ){
                metInitCriteria = true;
            }
            else if ( //prog only
                levelVals.length===0 &&
                searchVals.length>0 && 
                searchVals.filter(val=>courseCopy.program.includes(val)).length>0
            ){
                metInitCriteria = true;
            }else if ( //search only
                levelVals.length===0 && 
                searchVals.length===0
            ){
                metInitCriteria = true;
            }

            if (
                keywordVals.length>0 &&
                metInitCriteria &&
                keywordVals.some(val => courseCopy.name.toLowerCase().includes(val.toLowerCase()))
            ){
                newCourses.push(courseCopy);
            }
            else if(
                keywordVals.length===0 &&
                metInitCriteria
            ){
                newCourses.push(courseCopy);
            }
        });
        setCourses(newCourses);
    };

    return (
        <>
        {token ? (
            <>
                <Headerbar />
                <SearchCourse onSubmit={filterCourses}/>

                {!success && <div>Could not fetch courses, try again later!</div>}

                {courses ? (courses.map((course,key)=>{
                    return (<Courselink 
                    courseName = {course.name} 
                    courseCode = {course.code}
                    level={course.level} 
                    program={course.program}
                    key={key}
                    />)
                })
                ): (
                    <div>Loading courses...</div>
                )}
            </>
            ) : (
                <p><a href="/">Login</a> to access this page!</p>
            )}
        </>
        
    )
}

export default CourseList;
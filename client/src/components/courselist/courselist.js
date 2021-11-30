import React,{useState,useEffect} from "react";
import Courselink from "../courselink/courselink"

const CourseList = (props) => {
    const [success,setSuccess] = useState(true);
    const [courses,setCourses] = useState(null);
    const [user,setUser] = useState(null);
    
    let token;
    
    useEffect(() => {
        const loggedInUser = localStorage.getItem("course-rev-user");
        token = localStorage.getItem("course-rev-token");
        console.log(loggedInUser);
        if (loggedInUser) {
          const foundUser = loggedInUser;
          setUser(foundUser);
        }
    },[]);

    useEffect(()=>{
        fetch('/get-courses',{
            headers: {
                "x-access-token": token
            }
        })
        .then((res)=>(res.json()))
        .then((data)=>{
            console.log(data); 
            setSuccess(data.success);
            setCourses(data.courses);
        });
    },[])

    return (
        <>
        {user ? (
            <>
                <h1>Hello {user}!</h1>
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
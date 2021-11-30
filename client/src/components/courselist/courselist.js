import React,{useState,useEffect} from "react";
import Courselink from "../courselink/courselink"
import Dropdown from "../dropdown/dropdown";
import styled from "styled-components";

import {
    Container,
    Row,
    Col2
} from "../../containers/rootContainers";

const CourseList = (props) => {
    const [success,setSuccess] = useState(true);
    const [courses,setCourses] = useState(null);
    const [user,setUser] = useState(null);
    
    let token;
    
    useEffect(() => {
        const loggedInUser = localStorage.getItem("course-rev-user");
        token = localStorage.getItem("course-rev-token");
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
                <SearchContainer>
                    <Row>
                        <DropdownColumn>
                            <Dropdown 
                                label="Program"
                                singleSelect={false}
                                groupBy="cat"
                                options = {[{label: 'Option 1️⃣', value: 1, cat:'core curriculum'},{label: 'Option 2️⃣', value: 2, cat:'language'}]}
                            />
                        </DropdownColumn>
                        <DropdownColumn>
                            <Dropdown 
                                label={"Level"}
                                singleSelect={true}
                                groupBy=''
                                options = {[{label: 'Option 1️⃣', value: 1},{label: 'Option 2️⃣', value: 2}]}
                            />
                        </DropdownColumn>
                    </Row>
                </SearchContainer>                

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

const SearchContainer = styled(Container)``;

const DropdownColumn = styled(Col2)`
    display: flex;
    justify-content: center;
`;

export default CourseList;
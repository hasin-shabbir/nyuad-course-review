import React, {useEffect,useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import './App.css';
import Courselink from "./components/courselink/courselink";
import CourseReview from "./components/coursereview/coursereview";
import LoginForm from "./components/login-form/login-form";
import RegisterForm from "./components/register-form/register-form";

function App() {
  // const [data,setData] = useState(null);
  
  // useEffect(()=>{
  //   console.log('hello');
  //   fetch('/api')
  //     .then((res)=>res.json())
  //     .then((data)=>setData(data.message));
  // },[]);

  return (

    <>
        <Router>
          <Routes>
          <Route path="/" element = {<Navigate to="/login" />}
          />
          <Route path="/login" 
            element=
              {
                <LoginForm/>
              }
          />
          <Route path="/register" 
            element=
              {
                <RegisterForm/>
              }
          />
          

            <Route path="/courses" 
              element=
                { 
                  <Courselink 
                    courseName = "sample course" 
                    courseCode = "ABC-UH 1000EQX" 
                    level={1000} 
                    program={['ABC','E','Q','X','CDAD']}
                  />
                }
            />
            
            <Route path="/sample-course"
              element= {<CourseReview />}
            />

          </Routes>
        </Router>
        {/* //A list will be generated based on courses stored in db */}
        
    </>  
  );
}

export default App;

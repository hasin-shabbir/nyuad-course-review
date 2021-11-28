import React, {useEffect,useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import './App.css';
import CourseList from "./components/courselist/courselist";
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
                  <CourseList />
                }
            />
            
            <Route path="/course-review/:courseCodePath"
              element= {<CourseReview />}
            />

          </Routes>
        </Router>
        {/* //A list will be generated based on courses stored in db */}
        
    </>  
  );
}

export default App;

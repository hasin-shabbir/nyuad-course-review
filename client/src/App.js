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

  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element = {<Navigate to="/login" />}
            />
            <Route path="/login" 
              element={<LoginForm/>}
            />
            <Route path="/register" 
              element= {<RegisterForm/>}
            />
            <Route path="/courses" 
              element={<CourseList />}
            />
            <Route path="/course-review/:courseCodePath"
              element= {<CourseReview />}
            />
          </Routes>
        </Router>    
    </>  
  );
}

export default App;

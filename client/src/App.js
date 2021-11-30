import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import './App.css';

const CourseList = React.lazy(()=>import('./components/courselist/courselist'));
const CourseReview = React.lazy(()=>import('./components/coursereview/coursereview'));
const LoginForm = React.lazy(()=>import('./components/login-form/login-form'));
const RegisterForm = React.lazy(()=>import('./components/register-form/register-form'));

function App() {

  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element = {<Navigate to="/login" />}
            />
            <Route path="/login" 
              element={
                <Suspense fallback={<div>Loading...</div>}>  
                  <LoginForm/>
                </Suspense>
              }
            />
            <Route path="/register" 
              element= {
                <Suspense fallback={<div>Loading...</div>}>  
                  <RegisterForm/>
                </Suspense>
              }
            />
            <Route path="/courses" 
              element={
                <Suspense fallback={<div>Loading...</div>}>  
                  <CourseList/>
                </Suspense>
              }
            />
            <Route path="/course-review/:courseCodePath"
              element= {
                <Suspense fallback={<div>Loading...</div>}>  
                  <CourseReview/>
                </Suspense>
              }
            />
          </Routes>
        </Router>    
    </>  
  );
}

export default App;

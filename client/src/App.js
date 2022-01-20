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
const LoginPage = React.lazy(()=>import('./components/login-page/login-page'));
const RegisterPage = React.lazy(()=>import('./components/register-page/register-page'));
const Courserequestform = React.lazy(()=>import('./components/courserequestform/courserequestform'));
const UserReviews = React.lazy(()=>import('./components/userreviews/userreviews'));
const UserInfoForm = React.lazy(()=>import("./components/userinfo-form/userinfo-form"));

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
                  <LoginPage/>
                </Suspense>
              }
            />
            <Route path="/register" 
              element= {
                <Suspense fallback={<div>Loading...</div>}>  
                  <RegisterPage/>
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
            <Route path="/course-request"
              element= {
                <Suspense fallback={<div>Loading...</div>}>  
                  <Courserequestform />
                </Suspense>
              }
            />
            <Route path="/user-reviews"
              element= {
                <Suspense fallback={<div>Loading...</div>}>  
                  <UserReviews/>
                </Suspense>
              }
            />
            <Route path="/updateUserInfo"
              element= {
                <Suspense fallback={<div>Loading...</div>}>  
                  <UserInfoForm/>
                </Suspense>
              }
            />
          </Routes>
        </Router>    
    </>  
  );
}

export default App;

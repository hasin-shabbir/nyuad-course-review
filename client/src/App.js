import React, {useEffect,useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Courselink from "./components/courselink/courselink";

function App() {
  // const [data,setData] = useState(null);
  
  // useEffect(()=>{
  //   console.log('hello');
  //   fetch('/api')
  //     .then((res)=>res.json())
  //     .then((data)=>setData(data.message));
  // },[]);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo"/>
    //     <p>
    //       {!data ? "Loading..." : data}
    //     </p>
    //   </header>
    // </div>
<>
    <Router>
      <Routes>
        <Route path="/" 
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
          element= {<div>Hello</div>}
        />

      </Routes>
    </Router>
    {/* //A list will be generated based on courses stored in db */}
    
</>  
  );
}

export default App;

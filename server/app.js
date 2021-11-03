require('./db');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

const app = express();

//for sessions
const session = require('express-session');
const sessionOptions = {
    secret: 'secret cookie',
    resave: true,
    saveUninitialized: true
};
app.use(session(sessionOptions));

// body parser setup
app.use(bodyParser.urlencoded({ extended: false }));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    // res.redirect('/login');
});

app.get('/register', (req, res) => {
    //registration page
});

app.post('/register', (req, res) => {
    //registration form handling
    // res.redirect('/course-list'); //redirect to course-list upon successful registration by logging in the user
});

app.get('/login', (req, res) => {
    //login page
});

app.post('/login',(req,res)=>{
    //login form handling
    // res.redirect('/course-list'); //redirect to course-list upon successful login
})

app.get('/course-list',(req,res)=>{
    //handle any query parameters here
    //displaying the course list page
});

app.get('/review-page/:course',(req,res)=>{
    //rendering the review page for the particular course in the request parameters
});

app.get('/write-a-review/:course',(req,res)=>{
    //rendering the write a review page for the particular course in the request parameters
});

app.post('/write-a-review/:course',(req,res)=>{
    //handling form for writing a review for the particular course
    // res.redirect('/write-a-review/:course') //redirect to reviews page for the course upon successful review post
});

app.get('/edit-review/:course',(req,res)=>{
    //rendering the edit a review page for the logged in user for the particular course in the request parameters
});

app.post('/edit-review/:course',(req,res)=>{
    //handling form for editing a review for the particular course
    // res.redirect('/edit-a-review/:course') //redirect to reviews page for the course upon successful review edit
});

//ENDPOINT FOR API to respond to GET requests from the React App
app.get("/api", (req, res) => {
    res.json({ message: `Hello from server at ${PORT}` });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT,()=>{
    console.log(`SERVER LISTENING AT ${PORT}`);
});
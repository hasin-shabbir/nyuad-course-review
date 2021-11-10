require('dotenv').config();
require('./db');
const mongoose = require('mongoose');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = parseInt(process.env.PORT) || 3001;

const app = express();

//for sessions
const session = require('express-session');
const { Console } = require('console');
const sessionOptions = {
    secret: 'secret cookie',
    resave: true,
    saveUninitialized: true
};
app.use(session(sessionOptions));

// body parser setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

const Course = mongoose.model('Course');
const User = mongoose.model('User');
const CourseReview = mongoose.model('CourseReview');

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

app.get("/get-reviews",(req,res)=>{
    CourseReview.find({}, function(err, reviews, count) {
        if (err){
            console.log(err);
        }else{
            res.json(reviews);
        }
    });
})

app.post("/add-review", (req, res) => {
    const quality = req.body.quality;
    const difficulty = req.body.difficulty;
    const workload = req.body.workload;
    const grading = req.body.grading;
    const textReview = req.body.textReview;
    
    
    const sampleCourse = new Course({
        name: 'Sample',
        code: 'ABC-UH 1000XEQ',
        level: 1000,
        program: ['X','E','Q','CDAD'],
        averageRatings: {
            quality: 100,
            difficulty: 100,
            grading: 100,
            workload: 100
        }
    });

    const sampleUser = new User({
        username: 'John Doe',
        password: 'Random Hash',
        email: 'johndoe@nyu.edu',
        reviews: []
    });

    new CourseReview({
        course: sampleCourse,
        user: sampleUser,
        review: {
            description: textReview,
            quality: quality,
            difficulty: difficulty,
            grading: grading,
            workload: workload
        },
        timestamp: Date.now()
    }).save(function(err, newreview, count) {
        if (err){
            console.log(err);
            res.status(500).json({err: 'error in saving'});
        }else{
            res.status(200).json({posted: 'review posted'});
        }
    });

});

app.post("/edit-review", (req, res) => {
    const quality = req.body.quality;
    const difficulty = req.body.difficulty;
    const workload = req.body.workload;
    const grading = req.body.grading;
    const textReview = req.body.textReview;
    const uid = req.body.rev_id;

    const updateObj = {
        review: {
            description: textReview,
            quality: quality,
            difficulty: difficulty,
            grading: grading,
            workload: workload
        },
        timestamp: Date.now()
    }    

    CourseReview.findByIdAndUpdate(uid,updateObj,(err,result)=>{
        if (err){
            console.log(err);
            res.status(500).json({err: "error updating"});
        }else{
            res.status(200).json({success: "success"});
        }
    })

});

app.post("/delete-review", (req, res) => {
    const uid = req.body.rev_id;

    const searchQuery = {
        _id: uid
    }    

    CourseReview.findOneAndDelete(searchQuery, function (err, docs) {
        if (err){
            console.log(err);
            res.status(500).json({err: "error updating"});
        }else{
            res.status(200).json({success: "success"});
        }
    });

});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT,()=>{
    console.log(`SERVER LISTENING AT ${PORT}`);
});
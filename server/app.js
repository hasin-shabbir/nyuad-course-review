require('dotenv').config();
require('./db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require("./middleware/auth");
const mongoose = require('mongoose');
const Joi = require('joi');

const Scrapper = require('./services/scrapper');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = parseInt(process.env.PORT) || 3001;

const app = express();

//for sessions
const session = require('express-session');
const scrapper = require('./services/scrapper');
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

// app.get('/', (req, res) => {
//     // res.redirect('/login');
// });

app.post('/login',(req,res)=>{
    //login form handling
    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['edu'] } }).required(),
        password: Joi.string().min(8).required()
    }).with('email', 'password');

    try{
        const {error, value} = schema.validate({email: req.body.email, password: req.body.password});
        if (error){
            res.status(200).json({success: false, message: error.details[0].message});
            return;
        }
    }catch (err){
        res.status(200).json({success: false, message: "missing or invalid form input"});
    }
    if(!(req.body.email.indexOf("@nyu.edu", req.body.email.length - "@nyu.edu".length) !== -1)){
        res.status(200).json({success: false, message: 'Only nyu.edu emails allowed!'});
        return;
    }

    if (!(req.body.password && req.body.email)){
        res.json({success: false, message: "form values missing!"});
    }else{
        const inputEmail = req.body.email.toLowerCase();
        const userpass = req.body.password;
        User.findOne({"email": inputEmail},(err,user)=>{
            if (!err && user){
                const storedHash = user.password;
                bcrypt.compare(userpass,storedHash,function(err,passwordDidMatch){
                    if (passwordDidMatch){
                        req.session.regenerate((err)=>{
                            if (!err){
                                const token = jwt.sign(
                                    { user_id: user._id, email: user.email, name: user.username },
                                    process.env.TOKEN_KEY,
                                    {
                                    expiresIn: "2h",
                                    }
                                );
                                const reqUser = {
                                    username: user.username,
                                    email: user.email,
                                    token: token
                                }
                                req.session.user = reqUser;

                                res.json({success: true, user: reqUser});
                            }else{
                                res.json({success: false, message: 'an error occured, please try again later!'});
                            }
                        })
                    }else{
                        res.json({success: false, message: 'Incorrect password!'});
                    }
                })
            }else if(!user){
                res.json({success: false, message: 'User does not exist, try registering instead!'});
            }else{
                res.json({success: false, message: 'an error occured, please try again later!'});
            }
        })
    }
});

app.post('/register',(req,res)=>{
    //register form handling
    const schema = Joi.object({
        username: Joi.string().alphanum().required(),
        password: Joi.string().min(8).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['edu'] } }).required()
    }).with('password','email').with('email','username');

    try {
        const {error, value} = schema.validate({ username: req.body.username, password: req.body.password, email: req.body.email});
        if (error){
            res.status(200).json({success: false, message: error.details[0].message});
            return;
        }
    }
    catch (err) { 
        res.status(200).json({success: false, message: "missing or invalid form input"});
    }
    if(!(req.body.email.indexOf("@nyu.edu", req.body.email.length - "@nyu.edu".length) !== -1)){
        res.status(200).json({success: false, message: 'Only nyu.edu emails allowed!'});
        return;
    }

    if (!(req.body.password && req.body.username && req.body.email)){
        res.json({success: false, message: "form values missing!"});
    }
    else{
        const inputUser = req.body.username.toLowerCase();
        const inputEmail = req.body.email.toLowerCase();
        const userpass = req.body.password;
        if (userpass.length<8){
            res.json({success: false, message: "password shorter than 8 characters!"});
        }else{
            User.findOne({"email": inputEmail}, (err,result)=>{
                if (result){
                    res.json({success: false, message: "email already in use!"});
                }else{
                    bcrypt.genSalt(10,function(err,salt){
                        bcrypt.hash(userpass,salt,function(err,hash){
                            new User({
                                username: inputUser,
                                email: inputEmail,
                                password: hash
                            }).save(function(err,newUser){
                                if (err){
                                    res.json({success: false, message: "registration failed, please try again!"});
                                }else{
                                    res.json({success: true});
                                }
                            })
                        })
                    })
                }
            })
        }
    }
});

app.post('/vote',auth,(req,res)=>{  
    const uid = req.body.rev_id;
    const voteType = req.body.voteType;
    const userEmail = req.user.email;
    
    CourseReview.findById(uid,(err,rev)=>{
        if(!err){
            let upvotes = rev.review.upvotes;
            let downvotes = rev.review.downvotes;
            let currentVote;

            if (voteType==='upvote'){
                if (upvotes.includes(userEmail)){ //remove own upvote
                    upvotes.splice(upvotes.indexOf(userEmail), 1);
                    currentVote = 'none';
                }
                else {
                    if (downvotes.includes(userEmail)){ //switch from up to downvote
                        downvotes.splice(downvotes.indexOf(userEmail), 1);
                    }
                    upvotes = [...upvotes,userEmail];
                    currentVote = 'up';
                }     
            }
            else if (voteType==='downvote'){
                if (downvotes.includes(userEmail)){ //remove own downvote
                    downvotes.splice(downvotes.indexOf(userEmail), 1);
                    currentVote = 'none';
                }
                else{
                    if (upvotes.includes(userEmail)){ //switch from down to upvote
                        upvotes.splice(upvotes.indexOf(userEmail), 1);
                    }
                    downvotes = [...downvotes,userEmail];
                    currentVote = 'down';
                }
            }

            const voteCount = upvotes.length + (downvotes.length * -1);

            const review = {
                description: rev.review.description,
                quality: rev.review.quality,
                difficulty: rev.review.difficulty,
                grading: rev.review.grading,
                workload: rev.review.workload,
                votes: voteCount,
                upvotes: upvotes,
                downvotes: downvotes
            };

            const updatedReview = {
                review: review
            }
 
            CourseReview.findByIdAndUpdate(uid,updatedReview,(err,updatedRev)=>{
                if(!err){
                    res.status(200).json({success: "votes updated", votes: voteCount, currentVote: currentVote});
                }else{
                    res.json({success: false, message: "could not update vote! try again later"});
                }
            })
        }
        else{
            res.json({success: false, message: "could not find review! try again later"});
        } 
    });   
});

app.post('/updateUsername',auth,(req,res)=>{
    //register form handling
    const schema = Joi.object({
        username: Joi.string().alphanum().required(),
        password: Joi.string().min(8).required()
    }).with('password','username');

    try {
        const {error, value} = schema.validate({ username: req.body.username, password: req.body.password});
        if (error){
            res.status(200).json({success: false, message: error.details[0].message});
            return;
        }
    }
    catch (err) { 
        res.status(200).json({success: false, message: "missing or invalid form input"});
    }

    if (!(req.body.password && req.body.username)){
        res.json({success: false, message: "form values missing!"});
    }
    else{
        const inputUser = req.body.username.toLowerCase();
        const inputEmail = req.user.email;
        const userpass = req.body.password;
        if (userpass.length<8){
            res.json({success: false, message: "password shorter than 8 characters!"});
        }else{
            User.findOne({"email": inputEmail}, (err,result)=>{
                if (!err && result){
                    const storedHash = result.password;
                    bcrypt.compare(userpass,storedHash,function(err,passwordDidMatch){
                        if (passwordDidMatch){
                            User.findOneAndUpdate({email: inputEmail}, {username: inputUser},(err,result)=>{
                                if (!err){
                                    req.session.regenerate((err)=>{
                                        if (!err){
                                            const token = jwt.sign(
                                                { user_id: result._id, email: result.email, name: inputUser },
                                                process.env.TOKEN_KEY,
                                                {
                                                expiresIn: "2h",
                                                }
                                            );
                                            const reqUser = {
                                                username: inputUser,
                                                email: result.email,
                                                token: token
                                            }
                                            req.session.user = reqUser;
                                            CourseReview.updateMany({user_email: inputEmail}, {user: inputUser}, (err,courses)=>{
                                                if (!err){
                                                    res.json({success: true, user: reqUser, message: 'user and course reviews updated'});
                                                }else{
                                                    res.json({success: true, user: reqUser, message: 'only user updated'});
                                                }
                                            })
                                        }else{
                                            res.json({success: false, message: 'an error occured, please try again later!'});
                                        }
                                    });
                                }else{
                                    res.json({success: false, message: "Failed to update name, try again later!"});
                                }
                            });
                            
                        }else{
                            res.json({success: false, message: 'Incorrect password!'});
                        }
                    })
                }else{
                    res.json({success: false, message: "user does not exist!"});   
                }
            })
        }
    }
});

app.post('/request-course', auth, async (req,res)=>{
    
    const code = req.body.code;
    async function setCourses(vals){
              
        const allCourses=[...vals];
        allCourses.push({
            code: 'test1',
            level: 1000,
            name: 'test1',
            program: ['test1']
        });
        allCourses.push({
            code: 'test2',
            level: 1000,
            name: 'test2',
            program: ['test2']
        });
        allCourses.push({
            code: 'test3',
            level: 1000,
            name: 'test3',
            program: ['test3']
        });
        allCourses.push({
            code: 'test4',
            level: 1000,
            name: 'test4',
            program: ['test4']
        });
        allCourses.push({
            code: 'test5',
            level: 1000,
            name: 'test5',
            program: ['test5']
        });
        allCourses.push({
            code: 'test6',
            level: 1000,
            name: 'test6',
            program: ['test6']
        });

        function secureFilter(param, property, tester){
            if (!param || param === undefined || param=== null){
                return [];
            }
            return param.filter((el)=>{return el[property]=== tester})
        }
        
        const matchedCourses = secureFilter(allCourses,'code',code);

        // const matchedCourses = allCourses.filter((course)=>{return course.code===code});
        if (matchedCourses.length<1){
            res.json({success: false, message: "could not find course specified!"});
            return;
        }

        matchedCourses.forEach((course)=>{
            if (course.code===code){
                Course.findOne({"code": code}, (err,result)=>{
                    if (result){
                        res.json({success: false, message: "course already exists!"});
                        return;
                    }else{
                        new Course({
                            name: course.name.replace(/(\r\n|\n|\r)/gm, ""),
                            level: course.level,
                            code: course.code,
                            program: [...course.program]
                        }).save(function(err,newCourse){
                            if (err){
                                res.json({success: false, message: "saving course failed, please try again!"});
                                return;
                            }else{
                                res.json({success: true, message: 'course saved successfully'});
                                return;
                            }
                        });
                    }  
                })
            }
        })
    }
    const scrapper = new Scrapper.Scrapper();
    scrapper.scrape(setCourses);
});

//ENDPOINT FOR API to respond to GET requests from the React App
app.get("/api", (req, res) => {
    res.json({ message: `Hello from server at ${PORT}` });
});

app.get("/get-courses",auth,(req,res)=>{
    Course.find({},function(err,courses,count){
        if (err){
            res.json({success:false,message: 'could not fetch courses from the server!'})
        }else{
            res.json({success: true, courses: courses});
        }
    })
})

app.get("/get-course-name/:courseCode",(req,res)=>{
    Course.find({code: req.params.courseCode.substring(1)}, function(err, courses, count) {
        if (err){
            console.log(err);
        }else{
            res.json({courseName : courses[0].name});
        }
    });
})

app.get("/get-reviews/:courseCode",auth,(req,res)=>{
    const userEmail = req.user.email;
    
    CourseReview.find({course: req.params.courseCode.substring(1)}, function(err, reviews, count) {
        if (err){
            console.log(err);
        }else{
            const revs = reviews.map((rev,i)=> {
                if (rev.user_email===userEmail){
                    return {...rev._doc,currentUser: true};
                }else{
                    let returnDoc = {...rev._doc,currentUser: false};
                    if (rev._doc.review.upvotes.includes(userEmail)){
                        returnDoc = {...returnDoc,currentVote: 'up'}
                    }
                    else if (rev._doc.review.downvotes.includes(userEmail)){
                        returnDoc = {...returnDoc,currentVote: 'down'}
                    }
                    else{
                        returnDoc = {...returnDoc,currentVote: 'none'}
                    }

                    return returnDoc;
                }
            });
            res.json(revs);
        }
    });
});

app.get("/get-user-reviews",auth,(req,res)=>{
    const userEmail = req.user.email;
    CourseReview.find({user_email: userEmail}, function(err, reviews, count) {
        if (err){
            console.log(err);
        }else{
            const revs = reviews.map((rev,i)=> {
                if (rev.user_email===userEmail){
                    return {...rev._doc,currentUser: true};
                }else{
                    return {...rev._doc,currentUser: false};
                }
            });
            res.json(revs);
        }
    });
});

app.post("/add-review/:courseCode", auth, (req, res) => {
    const quality = req.body.quality;
    const difficulty = req.body.difficulty;
    const workload = req.body.workload;
    const grading = req.body.grading;
    const textReview = req.body.textReview;

    //add review form handling
    const schema = Joi.object({
        quality: Joi.number().required(),
        difficulty: Joi.number().required(),
        workload: Joi.number().required(),
        grading: Joi.number().required(),
        textReview: Joi.string().required()
    }).with('quality','difficulty').with('workload','grading').with('grading','textReview');

    try {
        const {error, value} = schema.validate(
            { 
                quality: quality,
                difficulty: difficulty,
                workload: workload,
                grading: grading,
                textReview: textReview
            }
        );
        if (error){
            res.status(200).json({success: false,message: error.details[0].message});
            return;
        }
    }
    catch (err) { 
        res.status(200).json({success: false, message: "missing or invalid form input"});
    }

    const userEmail = req.user.email;
    CourseReview.findOne({user_email: userEmail, course: req.params.courseCode},(err,result)=>{
        if (result){
            res.status(200).json({success: false, message: "You already have a review posted for the course, edit your review instead."});
        }else{
            new CourseReview({
                course: req.params.courseCode,
                user: req.user.name,
                user_email: req.user.email,
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
        }
    })   

});

app.post("/edit-review/", auth, (req, res) => {
    const quality = req.body.quality;
    const difficulty = req.body.difficulty;
    const workload = req.body.workload;
    const grading = req.body.grading;
    const textReview = req.body.textReview;
    const uid = req.body.rev_id;

    //edit review form handling
    const schema = Joi.object({
        quality: Joi.number().required(),
        difficulty: Joi.number().required(),
        workload: Joi.number().required(),
        grading: Joi.number().required(),
        textReview: Joi.string().required()
    }).with('quality','difficulty').with('workload','grading').with('grading','textReview');

    try {
        const {error, value} = schema.validate(
            { 
                quality: quality,
                difficulty: difficulty,
                workload: workload,
                grading: grading,
                textReview: textReview
            }
        );
        if (error){
            res.status(200).json({success: false, message: error.details[0].message});
            return;
        }
    }
    catch (err) { 
        res.status(200).json({success: false, message: "missing or invalid form input"});
    }

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

    const searchQuery = {
        _id: uid
    };   

    CourseReview.findByIdAndUpdate(uid, updateObj, (err,result)=>{
        if (err){
            console.log(err);
            res.status(500).json({err: "error updating"});
        }else{
            res.status(200).json({success: "success"});
        }
    });

});

app.post("/delete-review", auth, (req, res) => {
    const uid = req.body.rev_id;
    const searchQuery = {
        _id: uid
    };  

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
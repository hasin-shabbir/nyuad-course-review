// 1ST DRAFT DATA MODEL
const mongoose = require('mongoose');

const dbURI = process.env.MONGODB_URI;
// users
// * our site requires authentication... (Google firebase)
// * so users have a username and password
// * they also can have 0 or more reviews
const User = new mongoose.Schema({
    // username provided by firebase authentication plugin
    // password hash provided by firebase authentication plugin
    // email address provided by firebase authentication plugin
    username: {type: String, required: true},
    password: {type: String, required: true},
    reviews:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'CourseReview' }]
});

// review information
// * stores course review information including description and rating metrics
const reviewInfo = new mongoose.Schema({
    description: {type: String, required: true}, //textual review of the course
    quality: {type: Number, required: true}, //quality rating (integer between 0-100)
    difficulty: {type: Number, required: true}, //difficulty rating (integer between 0-100)
    grading: {type: Number, required: true}, // grading rating (integer between 0-100)
    workload: {type: Number, required: true}, //workload rating (integer between 0-100)
});

// an course review for a course
// * includes reference to user and course objects
// * has a unique identifier
// * has review information
const CourseReview = new mongoose.Schema({
    course:  { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true }, // reference to course object using course code
    user:  { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // reference to user object using username
    review: {type: reviewInfo, required: true}, //information specific to the review including description and metrics
    timestamp: {type: Date, required: true}, //time at which review was posted
}, {
    _id: true
});

// average rating object
// * stores average of values for all rating metrics for the course, default to 0 in case of no reviews
const averageRating = new mongoose.Schema({
    quality: {type: Number, default: 0, required: true}, //quality rating (integer between 0-100)
    difficulty: {type: Number, default: 0, required: true}, //difficulty rating (integer between 0-100)
    grading: {type: Number, default: 0, required: true}, // grading rating (integer between 0-100)
    workload: {type: Number, default: 0, required: true}, //workload rating (integer between 0-100)
});

// a course
// * stores course data including name, code, level, and program/s
// * has references to 0 or more course reviews for the course
// * has average ratings for the reviews posted, default to 0 in case of no reviews
const Course = new mongoose.Schema({
    name: {type: String, required: true}, // name of the course
    code: {type: String, required: true}, // unique code of the course but stored as string
    level: {type: Number, required: true}, // numerical level of the course
    program: {type: [String], required: true}, // a string list of different programs or categories the course falls under
    // course_reviews: [{type: mongoose.Schema.Types.ObjectId, ref:'CourseReview'}], // list of references to the course reviews for the course
    average_ratings: {type: averageRating, required: true}, // object of average numerical rating metrics
}, {
    _id: true
});

mongoose.connect(dbURI);

mongoose.model('User', User);
mongoose.model('CourseReview', CourseReview);
mongoose.model('Course', Course);
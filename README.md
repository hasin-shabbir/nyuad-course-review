# NYUAD Course Review

## Overview

At NYU Abu Dhabi, selecting your courses for the upcoming semester is usually a very difficult task. It takes time and effort to search up potential courses that interest you and then search up reviews by scrolling and searching through years old posts on Facebook groups, asking your friends, or searching up on RateMyProfessor. Yet still sometimes students end up finding nothing.

NYUAD course review is a web app where students will be able to access all the courses that have been and are being taught at the Abu Dhabi campus of NYU and find reviews and ratings for any course. NYU students can register, login, read course reviews, and add or edit their own reviews on courses offered at NYUAD. This way the web app attempts to make the time taking task that students face every semester easy and centralized. 


## Data Model

The application will store course, course review, and user information.

* Each course will have its own categories/tags to facilitate filtering/search.
* Each course will have its own course reviews.
* Each course review for a course will have information about user, review text, ratings on certain metrics, and timestamp of the review post.
* Each user can have a single review on a course, and multiple reviews overall through references.

An Example Course:

```javascript
{
  name: 'Language of Computers',
  code: 'CADT-UH 1013EQ', //unique for each course based on university assigned codes
  level: 1000, //level of course
  program: ['CADT', 'E','Q'] //a list of different programs or categories the course falls under
  course_reviews: // a list of references to each course review document for the course
  average_ratings: { // an object with average of values for all rating metrics for the course
    Quality: 89,
    Difficulty: 78,
    Grading: 90,
    Workload: 86
  }
}
```

An Example User:

```javascript
{
  username: "hasin",
  email: 'mhs581@nyu.edu',
  password: // a password hash,
  reviews: // an array of references to course review documents by the user
}
```

An Example Course Review:

```javascript
{
  id: // a unique id for each course review
  course: //a reference to a course object,
  user: // a reference to a User object,
  review: {
    description: //a text based review of the course,
    quality: // a numerical rating for course quality metric,
    difficulty: // a numerical rating for course difficulty metric,
    grading: // a numerical rating for course grading metric,
    workload: // a numerical rating for course workload metric,
  },
  createdAt: // timestamp
}
```


## [Link to Commented First Draft Schema](db.js)

## Wireframes

/login - page for logging in. Every user needs to login to access content.

![login](documentation/login_modal.png)

/register - page for registering as a user.

![register](documentation/register_modal.png)

/course-list - page for showing all the courses

![course list](documentation/course-list.png)

/course-list?<filter_params> - showing courses filtered according to query parameters

![filtered course list](documentation/course-filter.png)

/review-page/:course-name - page for showing all the reviews for the selected course

![reviews](documentation/review-page.png)

/write-a-review/:course-name - page for writing a review for the selected course

![write a review](documentation/write-a-review.png)

/edit-review/:course-name - page for editing own review for the selected course

![edit your review](documentation/edit_modal.png)

## Site map

![sitemap](documentation/sitemap/coursereview_sitemap.png)

## User Stories or Use Cases

1. as non-registered user, I can register a new account with the site using my nyu email
2. as a user, I can log in to the site
3. as a user, I can view and search in all of the course list
4. as a user, I can view all of the reviews posted for a course
5. as a user, I can write a review for a course
6. as a user, I can edit my review for a course
7. as a user, I can delete my review for a course

## Research Topics

* (6 points) React.js (Front-end framework)
    * using the popular React.js as the frontend framework
    * will also research on application state management using React Hooks
    * will be using react-router-dom for front-end routing
    * styled-components library for component styling
    * since React requires understanding of more advanced concepts including libraries to be used as a supplement/complement, and is a challenging framework to learn, I have assigned it 5 points.
* (3 points) Perform form validation using react-hook-form library (client-side) and Joi library (server-side)
    * Both libraries are powerful and lightweight that allow for complex and dynamic form validation through extensive means.
    * Ability to override default library behaviour allows for customization of validation methods as needed
    * Useful for the project since it is based on multiple forms for which validation is a necessity and provides an added layer of security
* (2 points) React.lazy (Javascript library)
    * To be used to import components into React dynamically and divide the entire web application into bundles/chunks
    * This will allow for serving only what is needed and not the entire content at once, helping in better web application performance/speed and less network bandwidth requirement
* (2 points) Modular css and Styled Components, other ready to use component libraries
    * Styled components or customization of styling html elements without having to create functional or class-based react components.
    * Modular css will assist in localizing styling for components
    * Component libraries (such as react-multi-select-component) will assist in avoiding reinventing the wheel for very common components yet still allow for customization as needed.
* (2 points) Authentication using JSONWebTokens
    * Authentication implementation using JWT and an accompanying API in order to assist with login system, authorization, and user specific content.
    

15 points total out of 8 required points 


## [Link to Initial Main Project File](server/app.js) 

## Annotations / References Used

1. [React Documentation](https://reactjs.org/docs/getting-started.html)
2. [Documentation for React.lazy](https://reactjs.org/docs/code-splitting.html)
3. [Documentation for react-hook-form](https://react-hook-form.com/get-started)
4. [Documentation for Joi form validator](https://joi.dev/api/?v=17.4.3)
5. [Documentation for styled-components](https://styled-components.com/)
6. [Documentation for multi-select dropdown](https://github.com/hc-oss/react-multi-select-component)


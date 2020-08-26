# REST-Day
## Technologies
- Node.js
- Express
- JSX
- MongoDB and Mongoose
- Heroku

## Live Heroku Link
https://rest-day.herokuapp.com/

## Approach
- REST Day is mainly an app for tracking your workouts. I have written notes about my workouts in my phone for years and I wanted to try to make a better way to do it. My workouts don't change much day to day and with REST Day I can use previous workouts as templates to log new ones with just a few clicks. Also, you don't have to look around your notes to find records of your lifts because REST Day has a record finder that can find a set you have entered based on the name of the exercise and the amount of reps.
- There are two models and two controllers. One of each for workout logs and personal record logs. There are three sets of views for workouts records and exercises. Exercises do not have a model because everything is stored inside the workout logs. Routes for exercises are also grouped into the workout log controller.
## Unsolved / Future Plans
- Login and signup features so that the site isnt the same for everyone like it is now.
- Make use of the body weight numbers with some sort of visual tracker to see changes in weight over time
- Maybe separate things into different years and months so that the info is easier to find even once you have hundreds of logs.
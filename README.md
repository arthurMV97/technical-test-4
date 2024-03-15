# Technical test

## Introduction

Fabien just came back from a meeting with an incubator and told them we have a platform “up and running” to monitor people's activities and control the budget for their startups !

All others developers are busy and we need you to deliver the app for tomorrow.
Some bugs are left and we need you to fix those. Don't spend to much time on it.

We need you to follow these steps to understand the app and to fix the bug : 
 - Sign up to the app
 - Create at least 2 others users on people page ( not with signup ) 
 - Edit these profiles and add aditional information 
 - Create a project
 - Input some information about the project
 - Input some activities to track your work in the good project
  
Then, see what happens in the app and fix the bug you found doing that.

## Then
Time to be creative, and efficient. Do what you think would be the best for your product under a short period.

### The goal is to fix at least 3 bugs and implement 1 quick win feature than could help us sell the platform

## Setup api

- cd api
- Run `npm i`
- Run `npm run dev`

## Setup app

- cd app
- Run `npm i`
- Run `npm run dev`

## Finally

Send us the project and answer to those simple questions : 
- What bugs did you find ? How did you solve these and why ? 
- Which feature did you develop and why ? 
- Do you have any feedback about the code / architecture of the project and what was the difficulty you encountered while doing it ? 


## Answers

### What bugs did you find ? How did you solve these and why ? 

1. The user name created via the form is not saved in the database: this is afront-end bug that is caused by a difference between the key sent and the key espected by the back-end
2. The user informations can't be updated. We have to change the event "onChange" by "onClick" on the Update button.
3. After the creation of a project, we don't see it on the list and we have to refresh the page to see it. We have to push the new project to the list of displayed projects
4. BONUS: Change the scrollbar color to default because it doesn't fit with the global UI.
5. Error when trying to go on the project informations page. We are trying to display informations contained in an object but it is an array that is sent to the project state. For that we need to send the object contained in the array.

### Which feature did you develop and why ? 

#### An Issue Management system
I have decided to create an issue management system for every project. 
This can help all the users of the platform:
- The project handler to follow the evolution of every projects and create new tasks
- The users who work on the project yo see the issue they have to do and to update their progression
We will have informations on everything that is done for the project and the things that have to be corrected.

### Feedback on the project:
1. API & Front-end: Update some packages, in both projects their are some packages that can cause security issues and have to be updated or removed.
2. Front-end: Big files. It is better to split componants by files instead of having multiple componants on the same file. Exemple project/list.js
3. Comments in the code: If their is comments to explain the code, the code is not well written. Have better naming for variables will help.
4. Some business logic are spread in the wrong files/componants. In the Create componant we have the creation logic & search logic. The search logic should be on another componant named Seach for example.
5. Magic numbers: Some numbers are used and we don't have the context for them. For example the nummber 8 is used to implicitely refear to a day. It will be more understandable to store it in a constant named `NUMBER_OF_HOURS_IN_A_DAY`.
6. Some business logic is calculated in the front-end app and should be calculated in the back-end. For example the cost per day for the activities.
7. The Developer experience is very poor: Bad linting, poor prettier config. We should have more errors shown like import errors, we should use typescript or at least use Proptypes in the front end. Some bugs like th no. 2 listed can't exist if we had typescript. 
8. Use jsx files instead of js files to separate pure js and react. The best is .ts & .tsx !
9. A lot of bugs are still existing in the app
10. I am not a huge fan of tailwind.
11. Redux is not used at it's full potential.
12. The business logic is contained inside the views which is not a best practice.
13. Some namings are really confusing or poor.

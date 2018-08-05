# Simple Rest Api


This is a simple rest api created using

  - ExpressJS 
  - Mongodb(Moongoose)
  - NodeJS
- Frontend -is  still in development
 # For running the application
- enter in your terminal
- cd location_of_api
- npm run serve  


### The app runs on the port number 3010
### you can visit http://localhost:3010/questions
#### USE POSTMAN Client 
- Get all questions
    -http://localhost:3010/questions
    -GET request
- Create a question
    -http://localhost:3010/questions
    -POST
- Get one question
    -http://localhost:3010/questions/qid
    -qid is Question ID
    -GET request
- Create answers for a question
    -http://localhost:3010/questions/qid/answers
    -qid is Question ID
    -POST request
- Update answers for a question
    -http://localhost:3010/questions/qid/answers/aid
    -qid is Question ID and aid is Answer Id
    -PUT request
- Delete answer for a question
    -http://localhost:3010/questions/qid/answers
    -qid is Question ID
    -POST request
- Update answers for a question
    -http://localhost:3010/questions/qid/answers/aid
    -qid is Question ID and aid is Answer Id
    -DELETE request
- Vote answers for a question
    -http://localhost:3010/questions/qid/answers/aid/vote-up   Up Vote
    -http://localhost:3010/questions/qid/answers/aid/vote-down  Down vote
    -qid is Question ID
    -POST request



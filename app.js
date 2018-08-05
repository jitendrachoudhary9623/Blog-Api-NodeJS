"use strict";

const express = require("express");
const app = express();
var routes = require("./routes");
const jsonParser = require("body-parser").json; //for parsing json
const logger = require("morgan"); //logger

//Libraries
app.use(logger("dev"));
app.use(jsonParser());

//middlewares
app.use("/questions", routes); //routes for questions

//catch error 404 and handles it
app.use((req, res, next) => {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

//Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});
app.listen(3010, () => {
  console.log("The app is running on port number 3010");
});

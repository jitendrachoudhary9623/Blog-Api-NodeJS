"use strict";

const express = require("express");
const router = express.Router();
var Question = require("./models").Question;

//if url consist of qid
router.param("qid", (req, res, next, id) => {
  Question.findById(id, (err, doc) => {
    if (err) return next(err);
    //if no document id found
    if (!doc) {
      err = new Error("Not Found");
      err.status = 404;
      return next(err);
    }
    req.question = doc;
    return next();
  });
});
//for answer
router.param("aid", (req, res, next, id) => {
  req.answer = req.question.answers.id(id);
  if (!req.answer) {
    err = new Error("Not Found");
    err.status = 404;
    return next(err);
  }
  next();
});

//GET for questions - ALl
router.get("/", (req, res, next) => {
  //find,projection,orderby.callback => mongodb
  Question.find({}, null, { sort: { createdAt: -1 } }, (err, questions) => {
    if (err) return next(err);
    res.json(questions);
  });
});

//POST for creating question
router.post("/", (req, res, next) => {
  var question = new Question(req.body);
  question.save((err, question) => {
    if (err) return next(err);
    res.status(201); //document saved successfully
    res.json(question);
  });
});

//GET for questions - ID
router.get("/:qid", (req, res, next) => {
  //id is preloaded if url have it due to router.paramas
  res.json(req.question);
});

router.post("/:qid", (req, res) => {
  res.json({ response: "working get ", id: req.params.qid });
});

//ANSWER ALL
router.post("/:qid/answers", (req, res, next) => {
  req.question.answers.push(req.body);
  req.question.save((err, question) => {
    if (err) return next(err);
    res.status(201); //document saved successfully
    res.json(question);
  });
});

//Edit One Answer
router.put("/:qid/answers/:aid", (req, res) => {
  req.answer.update(req.body, (err, result) => {
    if (err) return next(err);
    res.json(result);
  });
});

//DELETE One Answer
router.delete("/:qid/answers/:aid", (req, res) => {
  req.answer.remove(function(err) {
    req.question.save(function(err, question) {
      if (err) return next(err);
      res.json(question);
    });
  });
});

//Vote - upvote or downvote a specific answer
//:dir (direction) can have up or down values
//here 3 params are taken the second one acts as a validator to check if the vote is up or down and nothing else

router.post(
  "/:qid/answers/:aid/vote-:dir",
  function(req, res, next) {
    //check if it has any other value
    if (req.params.dir.search(/^(up|down)$/) === -1) {
      var err = new Error("Not Found");
      err.status = 404;
      next(err); //send error
    } else {
      req.vote = req.params.dir;
      next(); //send response
    }
  },
  function(req, res, next) {
    req.answer.vote( req.params.dir, function(err, question) {
      if (err){ 
           next(err);
      }
      res.json(question);
    });
  });


module.exports = router;

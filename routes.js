"use strict";

var express = require("express");
var router = express.Router();

//GET for questions - ALl
router.get("/", (req, res) => {
  res.json({ response: "working get" });
});

//POST for questions - ALl
router.post("/", (req, res) => {
  res.json({ response: "working post",body:req.body });
});

//GET for questions - ID
router.get("/:qid", (req, res) => {
    res.json({ response: "working get ",id:req.params.qid });

});
router.post("/:qid", (req, res) => {
    res.json({ response: "working get ",id:req.params.qid });

});


//ANSWER ALL
router.post("/:qid/answers",(req,res)=>{
    res.json({ response: "working post / answer ",
    questionId:req.params.qid,
    body:req.body
     });

});

//Edit One Answer
router.put("/:qid/answers/:aid",(req,res)=>{
    res.json({ response: "working put / answer ",
    questionId:req.params.qid,
    answerId:req.params.aid,
    body:req.body
     });

});

//DELETE One Answer
router.delete("/:qid/answers/:aid",(req,res)=>{
    res.json({ response: "working delete / answer ",
    questionId:req.params.qid,
    answerId:req.params.aid
     });

});


//Vote - upvote or downvote a specific answer
//:dir (direction) can have up or down values

router.post("/:qid/answers/:aid/vote-:dir",(req,res)=>{
    res.json({ response: "working post vote-"+req.params.dir,
    questionId:req.params.qid,
    answerId:req.params.aid,
    vote:req.params.dir
     });

});

module.exports = router;

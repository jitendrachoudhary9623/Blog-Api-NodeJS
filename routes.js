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
router.get("/:id", (req, res) => {
    res.json({ response: "working get ",id:req.params.id });

});
module.exports = router;

'use strict';

const express=require('express');
const app=express();
const jsonParser=require("body-parser").json;  //for parsing json

var jsonCheck=function(req,res,next){
    if(req.body){
        console.log(req.body.color);
    }
    else{
        console.log('no');
    }
    next();
}

app.use(jsonCheck);
app.use(jsonParser());
app.use(jsonCheck);



app.listen(3010,function(){
    console.log('The app is running on port number 3010');
});

'use strict';

const express=require('express');
const app=express();
var routes=require("./routes");
const jsonParser=require("body-parser").json;  //for parsing json

app.use(jsonParser());
app.use("/questions",routes);


app.listen(3010,function(){
    console.log('The app is running on port number 3010');
});

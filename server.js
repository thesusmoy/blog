const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/", function(req, res){
    res.send("hello world!");
});

app.listen(3000, function(){
    console.log("Hello, World!");
});

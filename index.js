import express from "express";
const app=express();
const port=3000;
app.get("/",function(req,res){
    const today = new Date();
    const day = today.getSeconds();   
    res.render("index.ejs",{
        sec:day,
        data:["first","second","third","four","five"],
        content:"<strong>Project 2 in progress"});
});
app.listen(port,function(){
    console.log("Server Started")
});
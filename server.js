const Express=require("express");
const mongoose = require("mongoose");
const { connectToDB, isConnected } = require('./db');
const App=Express();
const port=3000;

App.get("/",(req,res)=>{
    if(isConnected()){
        res.send("<h1>CONNECTION STATUS : Connected To MongoDB.....</h1>")
    }else{
        res.send("<h1>CONNECTION STATUS : Failed To Connect With MongoDB....</h1>")
    }
});

connectToDB();

App.get("/ping",(req,res)=>{
    res.send("<h1>Hat designs 👒<h1>")
});

App.listen(port,()=>{
    console.log(`Node App is running ${port} 🚀`)
    mongoose.connection.on('connected', () => {
        console.log('Mongoose connected to MongoDB');
    });
    mongoose.connection.on('error', () => {
        console.log('error');
    });
})
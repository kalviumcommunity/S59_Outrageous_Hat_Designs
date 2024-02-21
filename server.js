const express=require('express')
const app=express()
const port=3000;

app.get("/",(req,res)=>{
    res.send("Welcome to Hat Designs 👒");
})
app.get("/ping",(req,res)=>{
    res.send("Hat Designs 👒");
})

app.listen(3000,()=>{
    console.log(`Node API app is running in ${port}`);
})
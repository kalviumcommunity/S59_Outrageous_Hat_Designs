//Express code added.
const Express=require("express");
const App=Express();
const port=3000;

App.get("/",(req,res)=>{
    res.send("<h1>Welcome to Hat designs 👒<h1>")
});

App.get("/ping",(req,res)=>{
    res.send("<h1>Hat designs 👒<h1>")
});

App.listen(port,()=>{
    console.log(`Node App is running ${port} 🚀`)
})
const express = require('express');
const app = express();

app.get("/", (req,res)=>{
    res.send("Server is running,test is successfull");
})

app.listen(4000,function(){
    console.log("Application is running on port 5000");
})
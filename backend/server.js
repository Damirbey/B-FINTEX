const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req,res)=>{
    res.send("Server is running,test is successfull");
})

app.listen(PORT,function(){
    console.log("Application is running on port "+ PORT);
})
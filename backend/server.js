const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/signIn", (req,res)=>{
    const {email, password} = req.body;
    console.log("Email is "+email);
    console.log("Password is "+password);
    res.send("Server is running");
})

app.listen(PORT,function(){
    console.log("Application is running on port "+ PORT);
})
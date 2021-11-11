const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

/**Sign In request */
app.post("/signIn", (req,res)=>{
    const {email, password} = req.body;
    console.log("Email is "+email);
    console.log("Password is "+password);
    res.json("Server is running");
})
/**Register request */
app.post("/register",(req,res)=>{
    const {email,name,surname,password} = req.body;
    console.log("Register email "+email);
    console.log("Register name "+name);
    console.log("Register surname "+surname);
    console.log("Register password "+password);
    res.json("Registration is successful");
})

app.listen(PORT,function(){
    console.log("Application is running on port "+ PORT);
})
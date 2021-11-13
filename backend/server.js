const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

/**Connecting to the database */
const connectionString = {
    host:'localhost',
    port:5432,
    database:'bfintex',
    user:'postgres',
    password:'123'
}
const db = pgp(connectionString);

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
    db.any("INSERT INTO users (name,surname,email,hash,joined,active) VALUES ($1,$2,$3,$4,$5,$6)",[name,surname,email,password,new Date(),1])
    .then(response=>{
        db.any("SELECT * FROM users WHERE email = $1",[email])
        .then(user=>res.json(user));
    }).catch(err=>res.status(400).json("Ooops something went wrong"));
})

app.listen(PORT,function(){
    console.log("Application is running on port "+ PORT);
})
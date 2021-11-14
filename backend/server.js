const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const pgp = require('pg-promise')();
const PORT = process.env.PORT || 3000;
const signIn = require('./controllers/signIn');
const register = require('./controllers/register');

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
app.post("/signIn", signIn.performSignIn(db,bcrypt));

/**Register request */
app.post("/register",register.registerNewUser(db,bcrypt));

/**Fetching all users */
app.get("/getAllUsers",(req,res)=>{
    db.any("SELECT * FROM users WHERE id != 1")
    .then(allUsers=>res.json(allUsers))
    .catch(err=>res.status(400).json("Ooops something wrong"));
})
/**Fetching information of the selected user */
app.get("/getUser",(req,res)=>{
    const {userId} = req.body;
    db.any("SELECT * FROM users WHERE id = $1",[userId])
    .then(user=>res.json(user[0]))
    .catch(err=>res.status(400).json("Oops something wrong"));
})

app.listen(PORT,function(){
    console.log("Application is running on port "+ PORT);
})
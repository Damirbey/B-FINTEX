const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const pgp = require('pg-promise')();
const PORT = process.env.PORT || 3000;
const signIn = require('./controllers/signIn');
const register = require('./controllers/register');
const users = require('./controllers/users');

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

/********************************************************************************** */
/*******-------Users Section-------------********/

/**Fetching all users */
app.get("/getAllUsers",users.getAllUsers(db));

/**Updating user information */
app.put("/updateUser",users.updateUser(db,bcrypt));

/**Deleting user by the admin */
app.delete("/deleteUser",users.deleteUser(db));

/********************************************************************************** */
/*******-------Posts Section-------------********/

app.listen(PORT,function(){
    console.log("Application is running on port "+ PORT);
})
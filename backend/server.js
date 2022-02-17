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
const multer = require('multer');

/***EXTRA for IMAGE UPLOAD */
const fileUpload = require("express-fileupload");
/***EXTRA for IMAGE UPLOAD */
app.use(fileUpload());
/*** */

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
const upload = multer();

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

/**Adding new post */
app.post("/addNewPost",upload.single('file'),(req,res)=>{
    const {postTitle,postAuthor,postContent} = req.body;
    console.log(req.body)
    /*db.any("INSERT INTO posts (post_title,author,post_content,image,date_added) VALUES ($1,$2,$3,$4,$5)",[postTitle,postAuthor,lo_import('"'+postImage+'"',68583),postContent,new Date()])
    .then(response=>res.json("Success"))*/
});

app.post("/upload", (req,res)=>{
    const {name, data} = req.files.pic;
    console.log("Name is ", name);
    console.log("Data is ",data);
    db.any("INSERT INTO posts (post_title,author,post_content,image,date_added) VALUES ($1,$2,$3,$4,$5)",[name,"DY Test","TESTING IMAGE UPLOAD",data,new Date()])
    .then(res=>console.log("ALL GOOD!!!"))
    .catch(err=>console.log(err))
})

app.get("/img/:id",(req,res)=>{
    var id = req.params.id;
    db.any("SELECT image FROM posts WHERE post_id = $1",[id])
    .then(image=>{
    
    }).catch(err=>console.log(err));

})

app.listen(PORT,function(){
    console.log("Application is running on port "+ PORT);
})
/**Fetching all users from the database */
const getAllUsers =(db)=>(req,res)=>{
    db.any("SELECT * FROM users WHERE id != 1")
    .then(allUsers=>res.json(allUsers))
    .catch(err=>res.status(400).json("Ooops something wrong"));
}
/**Fetching single user information */
const getSingleUser =(db)=>(req,res)=>{
    const userId = req.query.userId;
    db.any("SELECT * FROM users WHERE id = $1",[userId])
    .then(user=>res.json(user[0]))
    .catch(err=>res.status(400).json("Oops something wrong"));
}
/**Updating user information */
const updateUser = (db)=> (req,res)=>{
    const {name,surname,newPassword,email} = req.body;
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(newPassword, saltRounds);
    if(newPassword.length>0)
    {
        db.any("UPDATE users SET name = $1, surname = $2, email = $3, hash = $4",[name,surname,email,hashedPassword])
        .then(response=>res.json("Success"))
        .catch(err=>res.status(400).json("Ooops something went wrong!"));
    }
    else{
        db.any("UPDATE users SET name = $1, surname = $2, email = $3",[name,surname,email])
        .then(response=>res.json("Success"))
        .catch(err=>res.status(400).json("Ooops something went wrong!"));
    }
}

module.exports={
    getAllUsers,
    getSingleUser,
    updateUser
}
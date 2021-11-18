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
const updateUser = (db,bcrypt)=> (req,res)=>{
    const {id,name,surname,newPassword,email} = req.body;
    if(newPassword.length > 0)
    {   
        const saltRounds = 10;
        const hashedPassword = bcrypt.hashSync("123", saltRounds);
        db.any("UPDATE users SET name = $1, surname = $2, email = $3, hash = $4 WHERE id = $5",[name,surname,email,hashedPassword,id])
        .then(response=>res.json("Success"))
        .catch(err=>res.status(400).json("Ooops something went wrong!"));
    }
    else{
        db.any("UPDATE users SET name = $1, surname = $2, email = $3 WHERE id = $4",[name,surname,email,id])
        .then(response=>res.json("Success"))
        .catch(err=>res.status(400).json("Ooops something went wrong!"));
    }
}

module.exports={
    getAllUsers,
    getSingleUser,
    updateUser
}
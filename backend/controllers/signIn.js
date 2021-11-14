const performSignIn = (db, bcrypt)=>(req,res)=>{
    const {email, password} = req.body;
    db.any("SELECT * FROM users WHERE email = $1",[email])
    .then(response=>{
        if(response.length==1)
        {
            const isValid = bcrypt.compareSync(password,response[0].hash);
            if(isValid){
                res.json(response);
            }else{
                res.status(400).json("User not found!");
            }
            
        }
        else{
            res.status(400).json("User not found!");
        }
    })
}

module.exports={
    performSignIn
}
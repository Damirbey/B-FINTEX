const registerNewUser = (db,bcrypt)=>(req,res)=>{
    const {email,name,surname,password} = req.body;
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    db.any("SELECT * FROM users WHERE email = $1",[email])
    .then(result=>{
        if(result.length==1)
        {
            res.status(400).json("Ooops something went wrong");
        }
        else{
            db.any("INSERT INTO users (name,surname,email,hash,joined,active) VALUES ($1,$2,$3,$4,$5,$6)",[name,surname,email,hashedPassword,new Date(),1])
            .then(response=>{
                db.any("SELECT * FROM users WHERE email = $1",[email])
                .then(user=>res.json(user));
            }).catch(err=>res.status(400).json("Ooops something went wrong"));
        }
    }) 
}

module.exports={
    registerNewUser
}
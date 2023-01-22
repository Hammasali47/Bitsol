
const jwt = require("jsonwebtoken");
const User = require("../models/usermodel");
const authMiddleware =(req,res,next)=>{
    const {authorization} =req.headers;

    const token = authorization
    if(!token){
        return res.status(401).send("Access Denied User is not authorized");
    }

    const decode = jwt.verify(token.split(" ")[1],process.env.JWT_Private_Key);
    console.log("decode",decode)
    req.user = decode;
    next()
    
}

const isDeleted = async(req,res,next)=>{

    const user1 =req.user;

    const user = await User.findOne({_id:user1.id, isDeleted:false})

    if(!user){
        res.status(400).send(
            {
                status:false,
                message:"User not found"
            }
        )
    }

    next()
}

module.exports = {authMiddleware,isDeleted};
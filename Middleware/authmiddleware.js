
const jwt = require("jsonwebtoken")
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

module.exports = authMiddleware;
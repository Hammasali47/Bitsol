const User = require("../models/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const registerUser = async (req, res) => {
  console.log("Inside Register User API");
  try {
    const { password, ...rest } = req.body;
    console.log("data",password,rest)
    const exist = await User.findOne({ email: rest.email, isDeleted: false });
    if (exist) return res.status(400).send("User Already Exists");
    const user = new User({
      ...rest,
    });
    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(password, salt);
    user.password = hashPassword;
    user.save();
    console.log("user",process.env.JWT_Private_Key)
    const payload ={
        id:user._id,
        name:user.name,
        email:user.email
    }
    const token = jwt.sign(payload,process.env.JWT_Private_Key);
    res.send({token:token ,message: "User Register Successfully!!" });
  } catch (err) {
    console.log(err)
    res.status(500).send({
      message: err.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token1= req.headers.authorization;
    console.log('request',token1)
    const user = await User.findOne({ email, isDeleted: false });
    if (!user) return res.status(400).send("User Not Found");
    try {
      const response = await bcrypt.compare(password, user.password);
      const { password: hashPassword, ...rest } = user;
      //     {
      //     id: rest._id,
      //     email: rest.email,
      //     name: rest.name,
      //   }
      const token = jwt.verify(token1.split(" ")[1],process.env.JWT_Private_Key);
      res.status(200).send({
        message: "User Logged in ",
        token:token
      });

    } catch (err) {
        res.status(500).send({
            message: err.message,
          });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getProfile =async (req,res) =>{
    const user1 = req.user;
    try {
        
        const user = await User.findById(user1.id)

        res.status(200).send({
            status:true,
            user  
        })

    } catch (error) {
        res.status(500).send({
            status: false,
            message: "Something went wrong"
        })
    }
}

module.exports = {
  registerUser,
  loginUser,
  getProfile
};
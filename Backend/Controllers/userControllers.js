const expressAsyncHandler = require('express-async-handler');
const asyncHandler = require('express-async-handler')
const User = require("../models/userModels");
const generateToken  = require('../util/generateToken');

const registerUser = asyncHandler(async (req, res) => {

    // taking name,email and pwd from user
    const { name, email, password, mob } = req.body;

    const userExists = await User.findOne({ email });
    // If user exists then show error
    if (userExists) {
        res.status(404);
        throw new Error("User already exists");
    }

    // else if user does not exist then create a new for this we use .create function
    // Calling userModels.js file
    const user = await User.create({
        name,
        email,
        password,
        mob
    });

    // if user is successfully created that is the input follows the schema then this condition ->if(user)
    if (user) {
        // send response in json file
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),    //json web token see video 10 from 30:00
        });
    } else {
        res.status(400);
        throw new Error("User not found");
    }
});


const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
      // .matchPassword is a function i.e is declared in userModel.js file which would decrypt the password
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id), 
        pic:user.pic,
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  });

const update=asyncHandler(async(req,res)=>{
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  user.password = password;
  console.log(user.password);
  res.status(201).json("success");
})
module.exports = { registerUser,authUser,update};
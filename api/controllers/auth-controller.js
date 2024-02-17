import { userModel } from "../models/user-model.js";
import bycrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import  Jwt  from "jsonwebtoken";


export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === '' ||
    email === '' ||
    password === ''
  ) {
    next(errorHandler(400, 'All fields are required'));
  }

  const hashedPassword = bycrypt.hashSync(password, 10);

  const newUser = new userModel({
    username:username,
    email:email,
    password:hashedPassword
   
  });

  try {
    await newUser.save();
    res.json("Signup Successfully");
  } catch (error) {
    next(error);
  }
};



export const signIn = async (req, res, next) => {

  const { email, password } = req.body;

  if (!email || !password || email == "" || password == "") {
    return next(errorHandler(400, "All Fields are Required"));
  }

  try {
    const isValidUser = await userModel.findOne({ email: email });
    if (!isValidUser) { 
      return next(errorHandler(404, "User Not Found"));
    }
    const isPasswordValid = bycrypt.compareSync(password, isValidUser.password);
    
    if (!isPasswordValid) {
      return next(errorHandler(400, "Invalid Password"));
    }

    const token = Jwt.sign({ Id: isValidUser._id }, process.env.JWT_SECRET);
    const {password:pass, ...rest} =  isValidUser._doc 
    return res.status(200).cookie("access_token", token, { httpOnly:true }).json(rest);
  } catch (error) {
    console.log(error)
  }
};

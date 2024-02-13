import { userModel } from "../models/user-model.js"
import bycrypt from 'bcryptjs'

export const signUp  = async(req,res,next)=>{
  try {
    const {username,email , password} = req.body
    if(!username || !email ||  !password || username == '' || email == '' || password == ''){
      return res.status(400).json({message:"All Fields Are Required ..."})
    }
    const hashedPassword  = bycrypt.hashSync(password,10)
  
    // create user 
    const newUser  = new userModel({
      username, 
      email, 
      password:hashedPassword
    })
    await  newUser.save()
    res.status(200).json("Signup Successfully")
    
  } catch (error) {
   next(error)
  }
}
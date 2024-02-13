import { userModel } from "../models/user-model.js"

export const signUp  = async(req,res)=>{
  try {
    const {username,email , password} = req.body
    if(!username || !email ||  !password || username == '' || email == '' || password == ''){
      return res.status(400).json({message:"All Fields Are Required ..."})
    }
  
    // create user 
    const newUser  = new userModel({
      username, 
      email, 
      password
    })
    await  newUser.save()
    res.status(200).json("Signup Successfully")
    
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}
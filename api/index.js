import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRouter  from '../api/routes/user-route.js'
import authRouter  from '../api/routes/auth-route.js'

dotenv.config()
const app = express();
app.use(express.json())

// connect to the database

mongoose.connect(
  process.env.MONGO_URL
).then(()=>{
    console.log("Connected To The Database")
}).catch(e=>{
    console.log(e)
})

app.use("/api/users",userRouter)
app.use("/api/auth",authRouter)

app.use((err,req,res,next)=>{
const statusCode  = err.statusCode || 500 
const message  = err.message || 'Internal Server Error'
res.status(statusCode).json({
  success:false,
  statusCode,
  message
})
})
app.listen(1010, () => {
  console.log(`server is running on port 1010`);
});

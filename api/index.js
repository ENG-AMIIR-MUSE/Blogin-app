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
app.listen(1010, () => {
  console.log(`server is running on port 1010`);
});

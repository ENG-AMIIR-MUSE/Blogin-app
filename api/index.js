import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRouter  from '../api/routes/user-route.js'

dotenv.config()
const app = express();

// connect to the database

mongoose.connect(
  process.env.MONGO_URL
).then(()=>{
    console.log("Connected To The Database")
}).catch(e=>{
    console.log(e)
})

app.use("/api/users",userRouter)
app.listen(1010, () => {
  console.log(`server is running on port 1010`);
});

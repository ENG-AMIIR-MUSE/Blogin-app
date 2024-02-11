import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'

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

app.get("/",(req,res)=>{
    res.json("api test ")
})
app.listen(1010, () => {
  console.log(`server is running on port 1010`);
});

import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
const app = express();

// connect to the database

mongoose.connect(
  "mongodb+srv://amir:amir@blog.vgue4dg.mongodb.net/blog?retryWrites=true&w=majority"
).then(()=>{
    console.log("Connected To The Database")
}).catch(e=>{
    console.log(e)
})

app.listen(1010, () => {
  console.log(`server is running on port 1010`);
});

const express  = require('express')

const cors  = require("cors")
const mongoose  = require("mongoose")
const dotenv  = require("dotenv").config()
const morgan  = require("morgan")
const  app = express()


app.use(express.json())
app.use(morgan("dev"))
const port  = 1212  
app.listen(port  , ()=>{
    console.log("app is listening ...")
})
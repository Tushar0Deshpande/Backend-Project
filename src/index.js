

import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";

import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()
// these then and catch used to catch any error in connecting db
// after connecting db recive from db and then app will listen
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGODB connection failed :",err);
})







//db can be connected 2 ways 1 by creating seperate file and importing into index

/*  
const app = express()

(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR",error);
            throw err
        })

        app.listen(process.env.PORT,()=>{
            console.log(`process is listening on ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("Error :",error)
        throw err
    }
})()
    */
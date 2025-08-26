

import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";

import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()









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
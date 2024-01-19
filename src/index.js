
// #note: as early as possible  in your application, import and configure dotenv: 
// require('dotenv').config({path: './env'})

import dotenv from "dotenv";

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";


dotenv.config({
    path: './env'
})

connectDB()

// when database is connected  using async a promise is returned 
.then( ()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at Port: ${process.env.PORT}`)
    })
})

.catch((err)=>{
    console.log(`MongoDb  connection Failed !!!`, err)
})











// import express from "express"
// const app = express ()

// (async () => {
//     try{
//       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//       app.on("error", ()=>{
//         console.log("ERR:", error);
//         throw error
//       })
//       app.listen(process.env.PORT, () =>{
//         console.log(`App is listening on port ${process.env.PORT}`);
//       })
//     }catch(error){
//      console.log("Error:",  error)
//      throw err

//     }
// })()
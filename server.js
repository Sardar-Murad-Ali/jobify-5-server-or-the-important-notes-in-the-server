import express from "express"
let app=express()
// while importing it is necessary to put tyhe .js extension at the end
// we feel some problems or the bug so some imports or the function must be at the specific position
// like teh express-async error must at the top the or the show stat controller is at the middle
// the error handler is at teh last or the not found ata the second last
// call the correct name .env or the .gitignore

import "express-async-errors"
// the above will handle errors we need not to use the try catch the 
import dotenv from "dotenv"
dotenv.config()
import AuthRoute from "./Routes/authRoute.js"
import AuthJobs from "./Routes/jobRoute.js"



import ErrorHandler from "./middlewares/ErrorHandler.js"
import NotFound from "./middlewares/NotFound.js"
import connectdb from "./db/connect.js"

app.use(express.json())


app.get("/",(req,res)=>{
    res.send("ThIS IS THE HOME PAGE again and again")
})

app.use("/api/v1/auth",AuthRoute)
app.use("/api/v1/jobs",AuthJobs)

app.use(NotFound)
app.use(ErrorHandler)

let port =process.env.PORT || 5000




const start=async ()=>{
    try {
        await connectdb(process.env.MONGO_URL)
        app.listen(port,()=>{
           console.log("app is on  the port  5000")
        })
        
    } catch (error) {
         console.log(error)
    }
}

start()


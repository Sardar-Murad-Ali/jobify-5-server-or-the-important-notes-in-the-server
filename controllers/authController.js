import User from "../models/userModel.js"
import { StatusCodes } from "http-status-codes"

const login = async (req,res)=>{
    res.send("this si login")
}

const register=async (req,res)=>{

// const register=async (req,res,next)=>{

    // try {
    //     let user=await User.create(req.body)
    //     res.status(201).json({user})
    // } catch (error) {
        //     // res.status(500).json({msg:'There was an error'})
        //     next(error)
        // }
// }
        
        // below by using teh express async errors in the server.js we need not to use the nect the error is gone in the err in the error handler middleware
            let user=await User.create(req.body)
            res.status(StatusCodes.CREATED).json({user})
}


const updateuser=async (req,res)=>{
    res.send("this si updateuser")
}


export {
    login,
    register,
    updateuser
}
import mongoose from "mongoose";
import validator from "validator";
const TaskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Provide the name"],
        minlength:3,
        maxlength:20,
        trim:true
    },
    email:{
        type:String,
        required:[true,"Please Provide the email"],
        unique:true,
        validate:{
            validator:validator.isEmail,
            messsage:"Please Provide The Valid Email"
        }
    },
    
    password:{
        type:String,
        required:[true,"Please Provide the password"],
        minlength:3,
    },
    
    lastName:{
        type:String,
        minlength:3,
        maxlength:20,
        trim:true,
        default:"LastName"
    },
    location:{
        type:String,
        minlength:3,
        maxlength:20,
        trim:true,
        default:"Bahawalpur"
    }
})

export default mongoose.model("JobifyUser",TaskSchema)

import { StatusCodes } from "http-status-codes"
const ErrorHandler=(err,req,res,next)=>{
    // console.log(err)
    // res.status(500).json({msg:'Something went wrong'})
    // res.status(Errors.statuscode).json({msg:err})
     

    // the err contains the error message when the error occoured if the error we gave the message in the userscheme then like name is required email is in correct form we gave the message which is in the wrr.message property and such errors have the name of the vaidation error console.log(err) and then see

    // see te 



    let Errors={
        statuscode:StatusCodes.INTERNAL_SERVER_ERROR,
        msg:"Something went wrong please try agin later!"
    }
    
    if(err.name==="ValidationError"){
        // Errors.msg=err.message
        Errors.statuscode=StatusCodes.BAD_REQUEST
        Errors.msg=Object.values(err.errors).map((all)=>all.message).join(",")
    }

    res.status(Errors.statuscode).json({msg:Errors.msg})
}

export default ErrorHandler


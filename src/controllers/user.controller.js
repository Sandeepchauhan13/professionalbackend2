import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {User} from "../models/user.model.js";
const registerUser = asyncHandler ( async (req, res)=>{
//  return res.status(200).json({
// message: "recieved msg from register user"
// })
// register steps 
// get data from frontend 
// validation - not empty (frontend se b ho sakta hai pr backend se b )
// check if user already exists  username , email
// check for images , check for avatar
// upload them to cloudinary , avatar 
// create user object - create entry in db 
// remove password and refresh token field from response 
//  check for user creation 
// return res 
 const {fullName,email, username, password}=req.body
 console.log("email:", email);
//  if  (fullName === ""){
//     throw new ApiError(400, "fullname is required")
//  }

if(
    [fullName, email, username, password].some((field)=> field?.trim()==="")
){
    throw new ApiError(400, "All fields are required")
}
})

export {registerUser}
import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

import {upload} from "../middlewares/multer.middleware.js"

const router = Router()

router.route("/register").post(
    //   upload multer se aaya hai we use field main array two object inside this 
// middleware inject now we can upload images 
    upload.fields([
{
name: "avatar",
maxCount: 1
},
{
name: "coverImage",
maxCount: 1
}
]), registerUser)


export default router
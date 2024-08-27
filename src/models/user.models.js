import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique: true,
            trim: true,  // remove extra spaces
            lowercase:true,
            // to make it searchable make it indexed..
            index:true
        },
        email:{
            type:String,
            required:true,
            unique: true,
            trim: true,  // remove extra spaces
            lowercase:true,
            validate: {
                validator: validator.isEmail,
                message: 'Invalid email address'
            }
        },
        fullname: {
            type:String,
            required:true,
            trim:true,
            index:true,
        },
        avatar:{
            type:String, //cloudinary url
            required:true
        },
        coverImage:{
            type:String, //cloudinary url
        },
        watchHistory:[
            {
                type:Schema.Types.ObjectId,
                ref:"Video"

            }
        ],

    }
)

export const User = mongoose.Model("User", userSchema);
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connection_DB = async ()=>{
    try{
        const con = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`Database connected successfully DB HOST:${con.connection.host}`);
    }catch(e){
        console.log("Mongo Connection Failed");
    }
}

export default connection_DB
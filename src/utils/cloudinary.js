import {v2 as cloudinary} from 'cloudinary';

// to read the file
import fs from 'fs';

          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUDNAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadCloudinary = async (localFilePath)=>{
    try{
        if(!localFilePath){
            return null
        }
        // file upload in cloudinary..
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        });
        // file has been uploaded
        console.log(response.url)
        console.log("file has been uploaded");
        return response
    }catch(e){
        // remove the locally saved temporary files as operation got failed..
        fs.unlinkSync(localFilePath)
        return null
    }
}


export {uploadCloudinary}
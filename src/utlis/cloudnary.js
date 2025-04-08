import {v2 as cloudinary} from 'cloudinary';
import { response } from 'express';
import fs from 'fs';

const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) throw new Error("No file path provided");
        //upload file to cloudinary
        const result = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });
        console.log("file is uploaded to cloudinary", result.url);
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath);
        console.error("Error uploading file to cloudinary", error);
    }
}

cloudinary.config({ 
    cloud_name: ProcessingInstruction.env.CLOUDINARY_CLOUD_NAME,
    api_key: ProcessingInstruction.env.CLOUDINARY_API_KEY,
    api_secret: ProcessingInstruction.env.CLOUDINARY_API_SECRET
});
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./db/connection.js";
import multer from "multer";
import csvParser from "csv-parser";
import {GridFsStorage} from 'multer-gridfs-storage'
import ghgData from "./models/models.js";

dotenv.config(); // loading variables

const dbUrl= process.env.MONGO_URL || "mongodb://127.0.0.1:27017/newData";
if (!dbUrl){
    console.error("db url not retreived !!");
    process.exit(1);
}


// create storge object
const storage = new GridFsStorage({ 
    url: dbUrl,
    cache: true,
 });
// Set multer storage engine to the newly created object
const upload = multer({ storage });


const app=express();
app.use(express.json());
app.use(cors());
const port= process.env.PORT || 3001


connectDB().then(()=> {


            //listening on port
            app.listen(port, (req,res)=>{
                console.log(`Server is live on ${port}`);
            });

            app.get("/data",async (req,res)=> {
                try{
                    console.log("GET Request received");
                    const getGasesData = await ghgData.find({});
                    res.send(getGasesData);
                }catch(error){
                    console.log("GET request Error is :", error);
                    res.status(400).send(error);
                }
            })

            app.post("/data",upload.single('filename'), async (req,res)=>{
                if(!req.file){
                    return res.status(400).json({ error: "No file uploaded" });
                }

                console.log("File details:>>>>>>>>>>>>>>>", req.file); // Log file details for debugging

            
                const conn = mongoose.connection;
                const gridfs = new mongoose.mongo.GridFSBucket(conn.db);
                
                 // Create a read stream from the uploaded file
                const readStream = gridfs.openDownloadStreamByName(req.file.filename);
                        const csvData = [];
                        readStream
                            .pipe(csvParser())
                            .on('data', (data) => {
                                csvData.push(data);
                            })
                            .on('end', async () =>{
    
                                try {
    
                                    const result = await ghgData.insertMany(csvData);
                                    console.log("Data stored successfully: ");
                                    res.status(200).json({ message: "Data stored successfully", result });
                                } catch (error) {
                                    console.error("Error:", error); // Logging validation error
                                    res.status(500).json({ error: "Server Error", message: error.message });
                                }
                    })
            
            });


        });
import mongoose from "mongoose";

function connectDB(){

    return new Promise((resolve, reject) => {

            mongoose.connect("mongodb://127.0.0.1:27017/newData",{
                useNewUrlParser:true,
                useUnifiedTopology:true
            }).then(()=>{
                console.log("Connection Successful ");
                resolve();
            }).catch((error)=>{
                console.log(`Connnection failure due to ${error}`);
                reject(error);
            })
        })

};

export default connectDB;

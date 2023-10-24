import mongoose from "mongoose";


// create schema of objects
const dataSchema= new mongoose.Schema({
    
    region:{
        type: String,
        // required: true,
        trim: true
    },
    anzsic_desciptor:{
        type: String,
        // required: true,
        trim: true
    },
    sub_industru:{
        type: String,
        trim: true
    },
    household_category:{
        type: String
    },
    gas:{
        type: String,
        required: [true, "gas emissions"]
    },
    units:{
        type: String,
        required: [true, "unit of gas emission"],
        trim: true
    },
    magnitude:{
        type: String,
        required: [true]
    },
    year:{
        type: Number,
        required: [true, "year of recording"]
    },
    data_val:{
        type: Number,
        require: [true, "numerical value of emission without units"]
    }

})

const ghgData= new mongoose.model("csvData",dataSchema,"gasesData"); // specifying collection name:: "gasesData"

export default ghgData;
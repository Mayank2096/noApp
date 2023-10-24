import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Form(){

    const [fileValue, setFileValue] =useState();
    const navigate = useNavigate();


    async function handleUpload(){
        
        // using FormData to send file as a part of the request body

        const formData = new FormData();
        formData.append('filename', fileValue); // key: 'filename' ; value: fileValue

        try {
            const result = await axios.post('http://localhost:3001/data', formData);
            // window.location.replace('http://localhost:3001/data');
            navigate('/data')
            console.log(result); 
        } catch (error) {
            console.log(error);

        }

    }

    return(
        <div className="csv-upload">
            <h1>Upload CSV file</h1><br/>
            <div className="csv-form">
                <form action="http://localhost:3001/data" method="POST">
                <input className="Button" type="file" name="csvFile" accept=".csv" onChange={(event)=> setFileValue(event.target.files[0])}required /> <br/>
                <button type="button" className="Button Button2" onClick={handleUpload}> Upload</button>
                </form>
            </div>
        </div>
    )
}
//action="http://localhost:3001/data" method="POST"

export default Form;
import axios from "axios";
import React, { useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';

 function FormResponse(){

    const [csvData, setCsvData] = useState();
    useEffect( ()=>{
        const getCsvData= async()=> {
    
                try{
                    const result=  await axios.get('http://localhost:3001/data',{
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    console.log("result is >>>>>>",result.data)
                    setCsvData(result.data);
                }catch(error){
                    console.log(error);
                }
            }
        
        getCsvData();
        
    })

    return(
                    <>
                    <div className="Container">
                        <h1 className="status">Data Stored Successfully</h1>
                    </div>
                    {/* <div className="data-table">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Polluting Gas</th>
                                <th>Unit</th>
                                <th>Value</th>
                                <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                            {csvData?.map((val,key)=>{
                                <tr key={key}>
                                <td>{val.gas}</td>
                                <td>{val.unit}</td>
                                <td>{val.data_val}</td>
                                <td>{val.year}</td>
                                </tr>
                            })}
                            </tbody>
                        </Table> */}
                    {/* </div> */}

                </>

    )

}


export default FormResponse;



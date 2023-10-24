import React, {useState} from "react";
import {BrowserRouter, Routes, Route  } from "react-router-dom";
import Form from "./Components/Form";
import FormResponse from "./Components/FormResponse";
function App() {

  return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Form/>}></Route>
              <Route path="/data" element={<FormResponse/>}></Route>
            </Routes>
        </BrowserRouter>
        
        );
}

export default App;

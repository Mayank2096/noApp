# noApp
This repository contains source code of CSV-warehouse application which stores data from uploaded csv file into database.

Folder Structure:
It contains two sub-folders: 
1. csv-warehouse: It is folder of frontend of application made using React.js.
2. Server: It comprises of file using NOde.js and Express.js

Execution of file:
Step1: Go to Server folder.
Step2: Edit .env file with user-centric variables like MONGO_URL , PORT
Step3: Run "npm start"

Architecture Details:
Frontend:
- It used React.js and Axios.
- Frontend is running on Port 3000.
- Two Components were made : Form and FormResponse.
- Form component takes input of csv file and post it to backend running on Port 3001.
- Then, FormResponse component was used to get response of successful data entry.
- These components uses Hooks , JS events and Formdata for desired execution of functionality.
- Axios allowed to make POST and GET call to and from backend.
- Testing of UI: Use GHG.csv file which is present on path <..csv-warehouse/public>
Backend:
- It used Node.js , Express.js and MongoDB.
- As CSV needed to uploaded, multer and csv-parser package were installed.
- As huge amount of data could be sent to database,GridFSstorage is used.
- Data was sent into chunks to avoid memory spike.
- CORS package was included to make compatibility between frontend and backend running on different ports.
- MongoDB data operations done after running mongod command.
- MongoDB compass helped in easy visualization of data injected in collection of database.
- Necessary validation checks were made in Model.js file.
- All required steps were taken to grab errorenous response or situation.

Feel free to ping me for any doubt, Looking forward for feedback and further discussion.

Happy Uploading!
   

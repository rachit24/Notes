const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
require("dotenv").config({ path: "./config.env" });
const path = require('path');

// Connect Database
connectDB();

const app = express();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

//using Route
app.use("/", require('./routes/noteRoute'));

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, '/client/build')));

    app.get('*', (req,res)=>{
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    })
} else{
    app.get('/', (req, res)=>{
        res.send("Api running");
    });
}

//config server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

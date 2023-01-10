const express = require('express');
const app = express();

// this is to use .env file variables
require('dotenv').config();
const port = process.env.PORT;

// import connect to connect with the database
const connect = require('./db/connect');

// home route 
app.get('/', (req, res) => {
    res.status(200).send({ message: "App started successfully!" })
  })

// app.use('/students' , )

const start = async() => {
    try {
        await connect(process.env.URL);
        app.listen((port) , () => {
            console.log(`App is listening at port ${port}`);
        })
    } catch (error) {
        console.log({"error": error.message});
    }
}

start();


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const teacherRouter = require('./routes/teacherRoute');
require('dotenv').config();

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use('/teachers', teacherRouter);

mongoose.connect(process.env.DATABASE_URI)
    .then(()=> {
        console.log("Connected to MongoDB Atlas Database");
        app.listen(3000, () => {
            console.log('Sever listening to port: '+port);
        })
    })
    .catch((err) => {
        console.log(err)
    });
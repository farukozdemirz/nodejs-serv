const mongoose = require("mongoose");
require('dotenv').config();
const express = require("express");
const app = express();

mongoose
    .connect(
        process.env.MONGODB_URI,
        { useNewUrlParser: true }
    ).then((res) => console.log('connected'))
    .catch(err => console.error('Error while connecting to DB', err));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.listen(process.env.PORT || 5000, () => {
    console.log('server')
})

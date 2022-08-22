const mongoose = require("mongoose");
require('dotenv').config();
const express = require("express");
const cors = require('cors');
const app = express();
const helmet = require('helmet');
const api = require('./api');

mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
).then((res) =>
    app.listen(process.env.PORT || 5000, () => {
        console.log('servaer')
    }))
    .catch(err => console.error('Error while connecting to DB'));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world")
})
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api', api);

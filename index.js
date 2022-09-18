const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


// DBConnect();
mongoose.connect("mongodb://0.0.0.0:27017").then(() => {
    console.log("Connected to database");
});


// server
app.get("/", (req, res) => {
    res.send("Tour Management System server");
});

app.listen(port, () => {
    console.log(`Tour Management System is running on port ${port}`);
});
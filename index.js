const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const tourRoute = require("./routes/tour.route");

const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


// DBConnect();
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.clke4up.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log("Connected to database");
});


// server
app.get("/", (req, res) => {
    res.send("Tour Management System server");
});

app.use('/tours', tourRoute);


app.listen(port, () => {
    console.log(`Tour Management System is running on port ${port}`);
});
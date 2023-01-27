
const express = require('express')
const dotenv =require('dotenv').config()
const mongoose=require('mongoose')
const cors = require('cors');


const axios = require('axios');

const todoRoute=require('./routes/urlRoute')
const app=express()

mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MongoDB connection is successful");
});

connection.on("error", (error) => {
  console.log("Error in MongoDB connection", error);
});

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(cors());
// routes
app.use(require("./routes/urlRoute"))
app.use(require("./routes/url"))

const PORT =process.env.PORT
app.listen(PORT,(req,res)=>{
  // res.setHeader("Access-Control-Allow-Origin", "*");
    console.log('server listening on port 3000');
})
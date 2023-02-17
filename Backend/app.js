require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./routes/userRoute");
const connectTodb = require("./Config/db");
const { default: mongoose } = require("mongoose");
const cors = require('cors');

//middlle ware 

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

connectTodb();

app.use("/" , userRouter);

module.exports = app;

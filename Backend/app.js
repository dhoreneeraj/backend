require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./routes/userRoute");
const connectTodb = require("./Config/db");

connectTodb();

app.use("/" , userRouter);

//middlle ware 

app.use(express.json());
app.use(express.urlencoded({extended:true}));

module.exports = app;

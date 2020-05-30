const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();

var PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect( uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB database connection established successfully")
})
//The router will be added as a middleware and will take control of request
const todoController = require("./controllers/todo.controllers")

app.use("/todo", todoController)

app.listen(PORT, ()=>{
    console.log("Listening on PORT: " + PORT);
})

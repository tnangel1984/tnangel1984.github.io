//Server

//Package Connections
const express = require('express');
const app = express();
app.listen(3000, ()=>{
  console.log("Express Listening...");
})

const mongoose = require ('mongoose');
const mongoURI = ('mongodb://localhost/TravelersDB');
mongoose.connect(mongoURI);

mongoose.connection.once('open',()=>{
  console.log("Connected to Mongo");
} )


//MIDDLE WARE

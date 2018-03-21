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
app.use(express.urlencoded{extended:false}); //<--bodyparser for body object
app.use(express.static('public')); //<--for CSS

const methodOverride = express('method-override');
  app.use(methodOverride('_mmethod'));  //<-- for put/delete methods

const session = require('express-session'); //<-- for sessions object
  app.use(
    {secret: "feedmeseymour",
     resave: false,
     saveunitialized:false

    }
  );





//ROUTES

//Server

    //Main Package Connections
    const express = require('express');
    const app = express();

    app.listen(3000, ()=>{
      console.log('Express Listening...');
    });

    const mongoose = require ('mongoose');
    const mongoURI = ('mongodb://localhost/TravelersDB');
    mongoose.connect(mongoURI);

    mongoose.connection.once('open',()=>{
      console.log("Connected to Mongo");
    });


//CONTROLLERS
    const destinationController = require("./controllers/destinations.js");
    app.use('/destinations/', destinationController);

    const sessionsController = require("./controllers/sessions.js");
    app.use('/sessions/', sessionsController);

    const travelersController = require("./controllers/travelers.js");
    app.use('/travelers/', travelersController);



//MIDDLE WARE
    app.use(express.urlencoded({extended:false})); //<--bodyparser for body object
    app.use(express.static('public')); //<--for CSS

    const methodOverride = require('method-override');
    app.use(methodOverride('_method'));  //<-- for put/delete methods

    const session = require('express-session'); //<-- for sessions object
    app.use(session(
    {secret: "feedmeseymour",
     resave: false,
     saveunitialized:false

    }
    ));





//ROUTES

app.get('/', (req, res)=>{
   res.render('index.ejs');
});

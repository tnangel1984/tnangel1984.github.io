//Server

    //Main Package Connections
    const express = require('express');
    const app = express();

        const methodOverride = require('method-override');

    const session = require('express-session'); //<-- for sessions
    const mongoose = require ('mongoose');


    //MIDDLE WARE
        app.use(express.urlencoded({extended:false})); //<--bodyparser for body object

        app.use(express.json());
        app.use(express.static('public')); //<--for CSS

        app.use(methodOverride('_method'));  //<-- for put/delete methods


        app.use(session(
        {secret: "feedmeseymour",
         resave: false,
         saveUninitialized:false
        }
        ));


//CONTROLLERS
    const destinationController = require("./controllers/destinations.js");
    app.use('/destinations/', destinationController);

    const sessionsController = require("./controllers/sessions.js");
    app.use('/sessions/', sessionsController);

    const travelersController = require("./controllers/travelers.js");
    app.use('/travelers/', travelersController);



    const mongoURI = ('mongodb://localhost:27017/TravelersDB');
    mongoose.connect(mongoURI);

    mongoose.connection.once('open',()=>{
      console.log("Connected to Mongo");
    });





//ROUTES

app.get('/', (req, res)=>{
   res.render('index.ejs');
});


    app.listen(3000, ()=>{
      console.log('Express Listening...');
    });

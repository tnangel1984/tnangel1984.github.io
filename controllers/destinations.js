const express = require('express');
const router = express.Router();
const Destination = require('../models/destinations.js');
const seed = require('../models/seedDestinations.js');
// const sessionsController = require('./sessions.js');


//Destination Page ROUTERS
//seedDestinations


router.get('/seedDestinations', (req, res)=>{
  Destination.create(seed, (err, createdDestination)=>{
      res.redirect('/destinations');
  });
});



// index pg
router.get('/', (req, res)=>{
    Destination.find({}, (err, allDestinations)=>{
        res.render('destinations/index.ejs', {
          destinations: allDestinations
        });
    });
});

//NEW pg
router.get('/new', (req, res)=>{
  res.render('destinations/new.ejs');
})


//EDIT pg
router.get('/:id/edit', (req, res)=>{
  Destination.findById(req.params.id, (err, foundDestination)=>{      //<--finds entire object by id property. Creates foundDestination to represent the object
      res.render('destinations/edit.ejs',{
        destination: foundDestination,              //<-- passes foundDestination into destination variable
        id: req.params.id
      });
  });
});

//POST/CREATE new
router.post('/new', (req, res)=>{
  Destination.create(req.body, (err, createdDestination)=>{
    res.redirect('/destinations');
    // res.send(req.body);
  });
});

// PUT/UPDATE edit
router.put('/:id/', (req, res)=>{
    Destination.findByIdAndUpdate(
         req.params.id,
         req.body,
         {new:true},
         (err, foundDestination)=>{
             // res.send(req.body);
             res.redirect('/destinations');
         }
    )
});

//delete
 router.delete('/:id', (req, res)=>{
   Destination.findByIdAndRemove(req.params.id, (err, removeDestination)=>{
       res.redirect('/destinations');
   });
 })

//show
router.get('/:id', (req, res)=>{
      Destination.findById(req.params.id, (err, foundDestination)=>{
        res.render('destinations/show.ejs', {

          destination: foundDestination,
          id:req.params.id,
          currentUser: req.session.currentUser
        });
        // console.log(req.session.currentUser);
      });
});

module.exports = router;

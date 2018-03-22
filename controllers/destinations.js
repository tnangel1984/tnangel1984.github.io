const express = require('express');
const router = express.Router();
const Destination = require('../models/destinations.js');


//Destination Page ROUTERS
// index pg
router.get('/', (req, res)=>{
    Destination.find({}, (err, allDestinations)=>{
        res.render('destinations/index.ejs', {
          destinations: allDestinations
        });
    });
});

//new pg
router.get('/new', (req, res)=>{
  res.render('destinations/new.ejs');
})

//edit pg
router.get('/:id/edit', (req, res)=>{
  Destination.findById(req.params.id, (err, foundDestination)=>{      //<--finds entire object by id property. Creates foundDestination to represent the object
      destination: foundDestination;                        //<-- passes foundDestination into destination variable
      res.render('destinations/edit.ejs')
  });
});

//post
router.post('/new', (req, res)=>{
    console.log(req.body);
  Destination.create(req.body, (err, createdDestination)=>{
    res.redirect('/');
    // res.send(req.body);

  });
});


// put
router.put('/', (req,res)=>{
   Destination.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, foundDestination)=>{
     res.send(req.body);
     res.redirect('/');
   })
})

//delete
 router.delete('/', (req, res)=>{
   Destination.findByIdAndRemove(req.params.id, (err, removeDestination)=>{
       res.redirect('/');
   });
 })

//show
router.get('/:id', (req, res)=>{
      Destination.findById(req.params.id, (err, foundDestination)=>{
        res.render('destinations/show.ejs', {
          destination: foundDestination,
          id:req.params.id
        });
      });
});

module.exports = router;

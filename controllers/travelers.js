const express = require('express');
const router = express.Router();
const Traveler = require('../models/travelers.js');
const bcrypt = require('bcrypt');
const seed = require('../models/seedTravelers.js');


//Travelers Page ROUTERS
//seedDestinations
router.get('showAll/seedTravelers', (req, res)=>{
  Traveler.create(seed, (err, createdTraveler)=>{
      res.redirect('/Travelers');
  });
});


//index
router.get('/showAll', (req, res)=>{

  Traveler.find({}, (err, allTravelers)=>{
      res.render('travelers/index.ejs',{
        travelers: allTravelers,
        currentUser:req.session.currentUser
      });
  });
});

//new
router.get('/new', (req, res)=>{
  res.render('travelers/new.ejs');
})

//post/Create
router.post('/new', (req, res)=>{
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
   Traveler.create(req.body, (err, createdTraveler)=>{
     res.redirect('/destinations');
   })
})

//edit pg
router.get('/edit', (req, res)=>{
  res.render('travelers/edit.ejs')
})


//Delete
router.delete('/:id', (req, res)=>{
  Traveler.findByIdAndRemove(req.params.id, (err,removeDestination)=>{
    res.redirect('/travelers');
  });
})



// show pg
// router.get('/showAll/:index', (req, res)=>{
//   Traveler.findById(req.params.id, (err, foundTraveler)=>{
//     res.render('/travelers/show/ejs', {
//          traveler: foundTraveler,
//          id: req.params.id
//     });
//   });
// });


module.exports = router;

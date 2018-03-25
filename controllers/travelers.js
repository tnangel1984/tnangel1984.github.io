const express = require('express');
const router = express.Router();
const Traveler = require('../models/travelers.js');
const bcrypt = require('bcrypt');


//Travelers Page ROUTERS
//index
router.get('/travelers', (req, res)=>{
  Traveler.find({}, (err, allTravelers)=>{
      res.render('travelers/index.ejs',{
        travelers: allTravelers
      })
  })

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

//show pg
router.get('/travelers/:index', (req, res)=>{
  Traveler.findById(req.params.id, (err, foundTraveler{
    res.render('/travelers/show/ejs', {
         traveler: foundTraveler,
         id: req.params.id
    });
  }))

})


module.exports = router;

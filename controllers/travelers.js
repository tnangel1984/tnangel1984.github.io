const express = require('express');
const router = express.Router();
const Traveler = require('../models/travelers.js');
const bcrypt = require('bcrypt');


//Travelers Page ROUTERS
//index
router.get('/', (req, res)=>{
  res.render('travelers/index.ejs')
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



module.exports = router;

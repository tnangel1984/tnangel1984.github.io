const express = require('express');
const router = express.Router();
const Destination = require('../models/destinations.js');


//Destination Page ROUTERS
//index pg
router.get('/', (req, res)=>{
  res.render('destinations/index.ejs')
});

//new pg
router.get('/new', (req, res)=>{
  res.render('destinations/new.ejs');
})

//edit pg
router.get('/edit', (req, res)=>{
  res.render('destinations/edit.ejs')
})


module.exports = router;

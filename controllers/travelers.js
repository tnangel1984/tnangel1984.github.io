const express = require('express');
const router = express.Router();

//Travelers Page ROUTERS
//index
router.get('/', (req, res)=>{
  res.render('travelers/index.ejs')
});

//new
router.get('/new', (req, res)=>{
  res.render('travelers/new.ejs');
})

//edit pg
router.get('/edit', (req, res)=>{
  res.render('travelers/edit.ejs')
})



module.exports = router;

const express = require('express');
const router = express.Router();


//Destination Page ROUTERS
//index
router.get('/', (req, res)=>{
  res.render('destinations/index.ejs')
});

module.exports = router;

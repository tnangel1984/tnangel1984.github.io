const express = require('express');
const router = express.Router();


//Sessions Page ROUTERS
//new

router.get('/new', (req, res)=>{
  res.render('sessions/new.ejs');
})





module.exports = router;

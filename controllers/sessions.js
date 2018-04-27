const express = require('express');
const router = express.Router();
const Traveler = require('../models/travelers.js');
const bcrypt = require('bcrypt');
//Sessions Page ROUTERS
//new

router.get('/new', (req, res)=>{
  res.render('sessions/new.ejs');
})

router.post("/new", (req, res)=>{
    Traveler.findOne({username:req.body.username}, (err, foundUser)=>{
            //must do a bcrypt comparaon here because of encrption
          if(bcrypt.compareSync(req.body.password, foundUser.password)){
              // create a session specific user
            req.session.currentUser = foundUser;
            res.redirect('/destinations');
          }else{
            res.send("Error wrong password");
          }
          console.log(req.body);
    });
});


router.delete('/', (req, res)=>{
   req.session.destroy((err)=>{
     res.redirect('/');
   })
})



module.exports = router;

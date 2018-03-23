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
            console.log(foundUser);
            console.log(req.session);
            console.log(bcrypt.compareSync(req.body.password,foundUser.password));
          if(bcrypt.compareSync(req.body.password, foundUser.password)){
              // create a session specific user
            req.session.currentUser = foundUser;
            console.log(req.session.currentUser);
            res.redirect('/destinations');
          }else{
            res.send("Error wrong password");
          }
    });
});


router.delete('/', (req, res)=>{
   req.session.destroy((err)=>{
     res.redirect('/');
   })
})



module.exports = router;

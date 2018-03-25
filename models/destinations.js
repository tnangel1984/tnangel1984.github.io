const express = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema(
  {
   city: {type:String, required:true},
   country: {type:String, required:false},
   stateRegion:String,
   dateOfVisit:String,
   img1:[String], //<--- test using string of arrays to populate slide show..
   img2:String,
   img3:String,
   recco:String,
   description:String,
   tags:[String]
   postedBy:{username:String}

 },
 {timestamps:true}
)

const Destination = mongoose.model('Destination',destinationSchema);

module.exports = Destination;

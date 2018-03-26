const express = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// const destinationSchema= require('./destinations.js');


const travelerSchema = new Schema(
    {
      username:{type:String, required:true},
      password:{type:String, required:true},
      email:{type:String},
      profileImg:String,
      aboutUser:String,
      // posts:[destinationSchema]
    },
    {
      timestamps:true
    }
)

const Traveler = mongoose.model('Traveler', travelerSchema);

module.exports = Traveler;

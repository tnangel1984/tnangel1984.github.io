const express = 'express';

const Schema = mongoose.Schema;

const travelerSchema = new Schema(
    {
      name:{type:String, required:true},
      password:{type:String, required:true}
    },
    {
      timestamps:true
    }
)

const Traveler = mongoose.model('Traveler', travelerSchema);

module.exports = Traveler;

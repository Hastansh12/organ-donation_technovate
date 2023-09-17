const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const bcrypt = require('bcrypt');

const portfolioSchema =new mongoose.Schema({
    owner:{ type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    bloodGroup:{type:String},
    gender:{type:String},
    age:{type:Number},
    weight:{type:Number},
    height:{type:Number},
    emergencyContact:{type:Number},
    dateOfBirth: { type: String},
    organName:[{type:String}],
})

const Portfolio = mongoose.model('Portfolio', portfolioSchema); //collection

module.exports = Portfolio;
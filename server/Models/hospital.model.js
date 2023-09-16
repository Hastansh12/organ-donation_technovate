const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const bcrypt = require('bcrypt');

const hospitalSchema = new mongoose.Schema({
    name:{type:string,required:true},
    location: { type: String, required: true },
    contactEmail: { type: String, required: true },
    contactPhone: { type: String, required: true },
    // List of Transplants Performed
    transplants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transplant' }],
  });
  
  module.exports = mongoose.model('Hospital', hospitalSchema);

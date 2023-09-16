const mongoose = require('mongoose');


// Define the main Transplant schema
const transplantSchema = new mongoose.Schema({
  organType: { type: String},
  transplantDate: { type: Date},
  recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  donor: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  hospital: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital'},
  transplantSurgeons: [{ type: String }],
  transplantCoordinator: { type: String },
  transplantStatus:{type:String,enum:['completed','scheduled','pending']},
  transplantOutcome: { type: String, enum: ['successful', 'complications', 'failed']},
  // Store post-transplant follow-up logs as an array
  postTransplantFollowUp: [{date: { type: Date},
                            entry: { type: String}}],
  organPreservation:{type:String},
  transplantationConsent: [{ type: String }], // Array of links or references to consent forms
  legalAndEthicalConsiderations: { type: String },
  documentation:[{type:String}]
});

module.exports = mongoose.model('Transplant', transplantSchema);
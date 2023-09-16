const mongoose = require('mongoose');

const transplantSchema = new mongoose.Schema({
  // Details of the Transplant
  organType: { type: String },
  date: { type: Date },
  // References to Donor and Recipient
  donor: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  // Hospital where the Transplant Took Place
  hospital: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital'},
});

module.exports = mongoose.model('Transplant', transplantSchema);
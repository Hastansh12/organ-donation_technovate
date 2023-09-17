const mongoose = require('mongoose');

const organSchema = new mongoose.Schema({
  organType: {
    type: String,
  },
  donor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital',
  },
  status: {
    type: String,
    enum: ['Available', 'Transplanted', 'Expired', 'Unavailable'],
  },
  availabilityDate: {
    type: Date,
  },
  transplantDate: Date,
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  transplantationCoordinator: String,
  preservationMethod: String,
  tissueType: String, 
  transportMethod: String, 
  preservationSolution: String, 
  hlaTyping: String, //HLA typing identifies specific genetic markers that play a crucial role in immune system compatibility between the donor and recipient.
  ischemiaTime: Number, //mia time refers to the duration that the organ remains without blood flow during transplantation.
  organWeight: Number, 
  organImaging: [{ type: String }],
  compatibilityScore: Number,
});

module.exports = mongoose.model('Organ', organSchema);

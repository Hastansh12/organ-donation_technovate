const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  registrationNumber: {
    type: String,
  },
  isLicensed: {
    type: Boolean,
  },
  licenseExpiryDate: Date,
  accreditationStatus: {
    type: String,
    enum: ['Accredited', 'Not Accredited', 'Pending'],
  },
  accreditationExpiryDate: Date,
  contactPerson: String,
  contactEmail: String,
  contactPhone: String,
  address: String,
  specialties: [String],
  bedCapacity: Number,
  emergencyServices: Boolean,
  website: String,
  lastVerificationDate: Date,
  verificationStatus: {
    type: String,
    enum: ['Verified', 'Not Verified'],
  },
  verificationNotes: String, // Notes from the verification process
  verificationDocuments: [{ type: String }], // Links or references to verification documents
});

const Hospital = mongoose.model('Hospital', hospitalSchema);

module.exports = Hospital;


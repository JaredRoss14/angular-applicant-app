const mongoose = require('mongoose');

const ApplicantSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  date: {
    type: String,
    default: Date.now
  },
  experience: {
    type: Number,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  availability: {
    monday: {
      type: Number,
      default: 0
    },
    tuesday: {
      type: Number,
      default: 0
    },
    wednesday: {
      type: Number,
      default: 0
    },
    thursday: {
      type: Number,
      default: 0
    },
    friday: {
      type: Number,
      default: 0
    },
    saturday: {
      type: Number,
      default: 0
    },
    sunday: {
      type: Number,
      default: 0
    }
  },
  questions: {
    convictedFelony: {
      type: Boolean,
      required: false
    },
    workAuth: {
      type: Boolean,
      required: false
    },
    puppyPreference: {
      type: Boolean,
      required: false
    }
  },
  favorited: {
    type: Boolean,
    default: false,
  }
});

const Applicant = module.exports = mongoose.model('Applicant', ApplicantSchema);
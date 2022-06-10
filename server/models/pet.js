'use strict';

const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  species: {
    type: String,
    required: true,
    enum: ['dog', 'cat'],
    lowercase: true,
  },
  picture: {
    type: String,
    default: ''
  }
}, { timestamps: true })

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
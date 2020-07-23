const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  weight: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
}, {
  timestamps: true,
}

);

module.exports = mongoose.model('animals', AnimalSchema);
const mongoose = require('mongoose');

const mazoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  clase: {
    type: String,
    required: true
  },
  cartas: {
    type: [[String,Number]],
    required: true
  }
});

mongoose.model('Mazo', mazoSchema, 'Mazos');
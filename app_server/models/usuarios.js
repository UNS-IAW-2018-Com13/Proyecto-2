const mongoose = require('mongoose');

const jugadorSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  estilo: {
    type: String,
    required: true
  },
  favoritos: {
    type: [Number],
    required: true
  }
});

mongoose.model('Usuario', jugadorSchema, 'Usuarios');
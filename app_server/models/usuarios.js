const mongoose = require('mongoose');

const jugadorSchema = new mongoose.Schema({
  idUser: {
    type: String,
    required: true
  },
  estilo: {
    type: String,
    default: "Standard"
  },
  favoritos: {
    type: [Number],
    default: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  }
});

mongoose.model('Usuario', jugadorSchema, 'Usuarios');
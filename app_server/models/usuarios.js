const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  userID: {
    type: String
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

mongoose.model('Usuario', usuarioSchema, 'Usuarios');
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  id: {
    type: String
  },
  token: {
    type: String
  },
  nombre: {
    type: String
  },
  mail: {
    type: String
  },
  estilo: {
    type: String,
    default: "Standard"
  },
  favoritos: {
    type: [Number],
    default: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }
});

module.exports = mongoose.model('Usuario', usuarioSchema, 'Usuarios');
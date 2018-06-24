const mongoose = require('mongoose');

const imagenSchema = new mongoose.Schema({
  nombre: {
    type: String
  },
  imagen: {
    type: String
  }
});

module.exports = mongoose.model('Imagen', imagenSchema, 'Imagenes');
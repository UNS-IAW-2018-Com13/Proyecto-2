const mongoose = require('mongoose');

const imagenSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  imagen: {
    type: String,
    required: true
  }
});

mongoose.model('Imagen', imagenSchema, 'Imagenes');
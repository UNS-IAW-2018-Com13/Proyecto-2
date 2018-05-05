const mongoose = require('mongoose');

const grupoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  integrantes: {
    type: [String],
    required: true
  }
});

mongoose.model('Grupo', grupoSchema, 'Grupos');
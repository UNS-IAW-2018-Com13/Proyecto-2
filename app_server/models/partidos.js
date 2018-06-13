const mongoose = require('mongoose');

const partidoSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  fecha: {
    type: String,
    required: true
  },
  hora: {
    type: String,
    required: true
  },
  jugador1: {
    type: String,
    required: true
  },
  jugador2: {
    type: String,
    required: true
  },
  rounds: {
      type: [{ganador: {type: String}, mazoG: {type: String}, mazoP: {type: String} }]
  },
  editor: {
    type: String,
    required: true
  },
  comentario: {
    type: String,
    required: true
  }
});

mongoose.model('Partido', partidoSchema, 'Partidos');
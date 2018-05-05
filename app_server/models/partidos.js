const mongoose = require('mongoose');

const partidoSchema = new mongoose.Schema({
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
  puntajeJugador1: {
    type: Number,
    required: true
  },
  jugador2: {
    type: String,
    required: true
  },
  puntajeJugador2: {
    type: Number,
    required: true
  },
  editor: {
    type: String,
    required: true
  }
});

mongoose.model('Partido', partidoSchema, 'Partidos');
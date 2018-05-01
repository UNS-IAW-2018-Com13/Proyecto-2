const mongoose = require('mongoose');

const jugadorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  puntaje: {
    type: Number,
    required: true
  },
  mazos: {
      type: [String],
      required: true
  }
});

mongoose.model('Jugador', jugadorSchema);
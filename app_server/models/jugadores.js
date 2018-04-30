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
  mazos: [String]
});

mongoose.model('Jugador', jugadorSchema);

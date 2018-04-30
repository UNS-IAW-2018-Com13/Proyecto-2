const mongoose = require('mongoose');
const torneo = mongoose.model('Torneos');

const getJugadores = function (req, res) {
  torneo
    .find()
    .exec((err, jugador) => {
      if (err) { 
        res.status(404).json(err);    
      } else {
        res.status(200).json(jugador);
      }
    });
};

module.exports = { getJugadores };
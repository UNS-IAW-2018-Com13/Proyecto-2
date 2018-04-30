const mongoose = require('mongoose');
const torneo = mongoose.model('Torneos');

/* GET home page. */
const index = function (req, res) { 
  res.render('index', { title: 'Express' });
};

const jugador = function(req, res) {
  torneo
    .find()
    .exec((err, jugador) => {
      if (err) { 
        res.render('error', { error : err });    
      } else {
        res.render('jugador', {
          title: 'Jugadores', 
          jugador: jugador 
        });
      }
    });
};

module.exports = {
  index,
  jugador
};
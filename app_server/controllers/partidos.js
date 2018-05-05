const mongoose = require('mongoose');
const Partido = mongoose.model('Partido');

const getPartidos = function (req, res) {
    Partido.find().exec((err, partidos) => {
        if (err) {
            res.status(404).json(err);
        } else {
            res.render('partidos', {partidos: partidos});
        }
    });
};

module.exports = {
  getPartidos
};
const mongoose = require('mongoose');
const Jugador = mongoose.model('Jugador');
const Mazo = mongoose.model('Mazo');

const getJugadores = function (req, res) {
    Jugador.find().exec((err, jugadores) => {
        if (err) {
            res.status(404).json(err);
        } else {
            Mazo.find().exec((err, mazos) => {
                if (err) {
                    res.status(404).json(err);
                } else {
                    res.render('jugadores', {jugadores: jugadores, mazos: mazos, claseMazo1:"", claseMazo2:"", claseMazo3:""});
                }
            });
        }
    });
};

module.exports = {
    getJugadores
};
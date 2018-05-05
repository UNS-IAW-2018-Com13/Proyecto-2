const mongoose = require('mongoose');
const Grupo = mongoose.model('Grupo');
const Jugador = mongoose.model('Jugador');
const Mazo = mongoose.model('Mazo');

const getGrupos = function (req, res) {
    Grupo.find().exec((err, grupos) => {
        if (err) {
            res.status(404).json(err);
        } else {
            Jugador.find().exec((err, jugadores) => {
                if (err) {
                    res.status(404).json(err);
                } else {
                    Mazo.find().exec((err, mazos) => {
                        if (err) {
                            res.status(404).json(err);
                        } else {
                            res.render('grupos', {grupos: grupos, jugadores: jugadores, mazos: mazos, claseMazo1:"", claseMazo2:"", claseMazo3:""});
                        }
                    });
                }
            });
        }
    });
};

module.exports = {
    getGrupos
};
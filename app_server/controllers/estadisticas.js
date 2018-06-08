const mongoose = require('mongoose');
const Jugador = mongoose.model('Jugador');
const Usuario = mongoose.model('Usuario');

const getEstadisticas = function (req, res) {
    Jugador.find().exec((err, jugadores) => {
        if (err) {
            res.status(404).json(err);
        } else {
            player = new Array();
            votes = new Array();
            for (var i = 0; i < jugadores.length; i++) {
                player[i] = jugadores[i].nombre;
                votes[i] = jugadores[i].favorito;
            }
            favoritos = new Object();
            favoritos.jugadores = player;
            favoritos.votos = votes;
            if (req.user) {
                Usuario.findOne({'id': req.user.id}, (err, resultado) => {
                    if (err) {
                        res.status(400).json(err);
                    } else {
                        res.render('estadisticas', {usuario: resultado, favoritos});
                    }
                });
            } else {
                res.render('estadisticas', {favoritos});
            }
        }
    });
};

module.exports = {
    getEstadisticas
};
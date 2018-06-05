const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');
const Jugador = mongoose.model('Jugador');

const guardarFavoritos = function (req, res) {
    if (req.user) {
        Usuario.update({'id': req.user.id}, {'favoritos': req.body.favoritos}, (err, usr_up) => {
            if (err) {
                res.status(400).json(err);
            } else {
                Jugador.findOne({'idFavorito': req.body.idFavorito}).exec((err, jgdr) => {
                    if (err) {
                        res.status(404).json(err);
                    } else {
                        favCount = jgdr.favorito;
                        if (req.body.fav === 1) {
                            favCount++;
                        } else {
                            favCount--;
                        }
                        Jugador.update({'id': jgdr.id}, {'favorito': favCount}, (err, jgdr_up) => {
                            if (err) {
                                res.status(400).json(err);
                            } else {
                                res.status(201);
                            }
                        });
                    }
                });
            }
        });
    } else {
        res.json({msj: "usuario_no_logueado"});
    }

};

function setearFavoritos() {
    var resultado = new Array(colJugadores.length);
    for (var i = 0; i < colJugadores.length; i++) {
        resultado[i] = generarEstructuraJugador(colJugadores[i]);
    }
    return resultado;
}

module.exports = {
    guardarFavoritos
};
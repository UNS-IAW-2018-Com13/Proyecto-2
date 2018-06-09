const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');
const Jugador = mongoose.model('Jugador');

var userData;
var playerData;
var userFavs;
var playerFavCount;

const guardarFavoritos = function (req, res) {
    var idFav = req.body.idFavorito;
    var favMark = req.body.fav;
    if (req.user) {
        Usuario.findOne({'id': req.user.id}, (err, usr) => {
            if (err) {
                res.status(400).json(err);
            } else {
                Jugador.findOne({'idFavorito': idFav}).exec((err, jgdr) => {
                    if (err) {
                        res.status(404).json(err);
                    } else {
                        userData = usr;
                        playerData = jgdr;
                        userFavs = usr.favoritos;
                        playerFavCount = jgdr.favorito;
                        actualizarDatos(idFav, favMark);
                        Jugador.update({'nombre': playerData.nombre}, {'favorito': playerFavCount}, (err, jgdr_up) => {
                            if (err) {
                                res.status(400).json(err);
                            } else {
                                Usuario.update({'id': userData.id}, {'favoritos': userFavs}, (err, usr_up) => {
                                    if (err) {
                                        res.status(400).json(err);
                                    } else {
                                        res.status(201).json({msj: "datos_actualizados"});
                                    }
                                });
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

function actualizarDatos(id, mark){
    if(userFavs[id] === 1){
        if(mark === 0){
            userFavs[id] = 0;
            playerFavCount--;
        }
    } else {
        if(mark === 1){
            userFavs[id] = 1;
            playerFavCount++;
        }
    }
}

module.exports = {
    guardarFavoritos
};
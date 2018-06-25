const mongoose = require('mongoose');
const Jugador = mongoose.model('Jugador');
const Mazo = mongoose.model('Mazo');
const Usuario = mongoose.model('Usuario');
const Imagen = mongoose.model('Imagen');

var colJugadores;
var colMazos;
var allAvatar;

const getJugadores = function (req, res) {
    Jugador.find().exec((err, jugadores) => {
        if (err) {
            res.status(404).json(err);
        } else {
            Mazo.find().exec((err, mazos) => {
                if (err) {
                    res.status(404).json(err);
                } else {
                    Imagen.find().exec((err, imagenes) => {
                        if (err) {
                            res.status(404).json(err);
                        } else {
                            colJugadores = jugadores;
                            colMazos = mazos;                            
                            allAvatar = imagenes;
                            var jgdrs = obtenerJugadores();
                            if (req.user) {
                                Usuario.findOne({'id': req.user.id}, (err, resultado) => {
                                    if (err) {
                                        res.status(400).json(err);
                                    } else {
                                        res.render('jugadores', {usuario: resultado, jugadores: jgdrs});
                                    }
                                });
                            } else {
                                res.render('jugadores', {jugadores: jgdrs});
                            }
                        }
                    });
                }
            });
        }
    });
};

function obtenerJugadores() {
    var resultado = new Array(colJugadores.length);
    for (var i = 0; i < colJugadores.length; i++) {
        resultado[i] = generarEstructuraJugador(colJugadores[i]);
    }
    return resultado;
}

function obtenerClasesMazosJugador(nombreMazo1, nombreMazo2, nombreMazo3) {
    var resultado = ["", "", ""];
    for (var i = 0; i < colMazos.length; i++) {
        if (colMazos[i].nombre === nombreMazo1) {
            resultado[0] = colMazos[i].clase;
        }
        if (colMazos[i].nombre === nombreMazo2) {
            resultado[1] = colMazos[i].clase;
        }
        if (colMazos[i].nombre === nombreMazo3) {
            resultado[2] = colMazos[i].clase;
        }
        if ((resultado[0] !== "") && (resultado[1] !== "") && (resultado[2] !== "")) {
            return resultado;
        }
    }
}

function generarEstructuraJugador(jugador) {
    var nom = jugador.nombre;
    var avatar="";
    for(i=0; i<allAvatar.length; i++){
        if (allAvatar[i].nombre===nom){
            avatar=allAvatar[i].imagen;
        }
    }

    var pun = jugador.puntaje;

    var fav = jugador.idFavorito;

    var maz1 = jugador.mazos[0];
    var maz2 = jugador.mazos[1];
    var maz3 = jugador.mazos[2];
    var clasMazs = obtenerClasesMazosJugador(maz1, maz2, maz3);

    var jsonObj = new Object();
    jsonObj.nombre = nom;
    jsonObj.avatar = avatar;
    jsonObj.puntaje = pun;
    jsonObj.favorito = fav;
    jsonObj.mazo1 = clasMazs[0];
    jsonObj.mazo2 = clasMazs[1];
    jsonObj.mazo3 = clasMazs[2];

    return jsonObj;
}

module.exports = {
    getJugadores
};
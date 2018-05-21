const mongoose = require('mongoose');
const Jugador = mongoose.model('Jugador');
const Mazo = mongoose.model('Mazo');

var colJugadores;
var colMazos;

const getJugadores = function (req, res) {
    Jugador.find().exec((err, jugadores) => {
        if (err) {
            res.status(404).json(err);
        } else {
            Mazo.find().exec((err, mazos) => {
                if (err) {
                    res.status(404).json(err);
                } else {
                    colJugadores = jugadores;
                    colMazos = mazos;
                    var jgdrs = obtenerJugadores();
                    res.render('jugadores', {jugadores: jgdrs});
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

    var pun = jugador.puntaje;

    var maz1 = jugador.mazos[0];
    var maz2 = jugador.mazos[1];
    var maz3 = jugador.mazos[2];
    var clasMazs = obtenerClasesMazosJugador(maz1, maz2, maz3);

    var jsonObj = new Object();
    jsonObj.nombre = nom;
    jsonObj.puntaje = pun;
    jsonObj.mazo1 = clasMazs[0];
    jsonObj.mazo2 = clasMazs[1];
    jsonObj.mazo3 = clasMazs[2];

    return jsonObj;
}

module.exports = {
    getJugadores
};
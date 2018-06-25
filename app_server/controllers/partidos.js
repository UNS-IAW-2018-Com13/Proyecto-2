const mongoose = require('mongoose');
const Partido = mongoose.model('Partido');
const Usuario = mongoose.model('Usuario');
const Mazo = mongoose.model('Mazo');

var colPartidos;
var colMazos;

const getPartidos = function (req, res) {
    Partido.find().exec((err, partidos) => {
        if (err) {
            res.status(404).json(err);
        } else {
            Mazo.find().exec((err, mazos) => {
                if (err) {
                    res.status(400).json(err);
                } else {
                    colPartidos = partidos;
                    colMazos = mazos;
                    var prtds = obtenerPartidos();
                    if (req.user) {
                        Usuario.findOne({'id': req.user.id}, (err, resultado) => {
                            if (err) {
                                res.status(400).json(err);
                            } else {
                                res.render('partidos', {usuario: resultado, partidos: prtds});
                            }
                        });
                    } else {
                        res.render('partidos', {partidos: prtds});
                    }
                }
            });

        }
    });
};

function obtenerPartidos() {
    var resultado = new Array(colPartidos.length);
    for (var i = 0; i < colPartidos.length; i++) {
        resultado[i] = generarEstructuraPartido(colPartidos[i]);
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

function generarEstructuraPartido(partido) {
    var id = partido.id;

    var fec = partido.fecha;

    var hor = partido.hora;

    var j1 = partido.jugador1;

    var j2 = partido.jugador2;

    var com = partido.comentario;

    var clasMazsJ1 = obtenerClasesMazosJugador(j1 + "1", j1 + "2", j1 + "3");
    var clasMazsJ2 = obtenerClasesMazosJugador(j2 + "1", j2 + "2", j2 + "3");

    var r1 = 0;
    var r2 = 0;
    var rou = [];

    for (var i = 0; i < partido.rounds.length; i++) {
        var r = new Object();
        if (partido.rounds[i].ganador === j1) {
            r1 += 1;
            r.ganador = 1;
            if (partido.rounds[i].mazoG === (j1 + "1")) {
                r.mj1 = clasMazsJ1[0];
            }
            if (partido.rounds[i].mazoG === (j1 + "2")) {
                r.mj1 = clasMazsJ1[1];
            }
            if (partido.rounds[i].mazoG === (j1 + "3")) {
                r.mj1 = clasMazsJ1[2];
            }
            if (partido.rounds[i].mazoP === (j2 + "1")) {
                r.mj2 = clasMazsJ2[0];
            }
            if (partido.rounds[i].mazoP === (j2 + "2")) {
                r.mj2 = clasMazsJ2[1];
            }
            if (partido.rounds[i].mazoP === (j2 + "3")) {
                r.mj2 = clasMazsJ2[2];
            }
            rou[i] = r;
        } else {
            if (partido.rounds[i].ganador === j2) {
                r2 += 1;
                r.ganador = 2;
                if (partido.rounds[i].mazoG === (j2 + "1")) {
                    r.mj1 = clasMazsJ2[0];
                }
                if (partido.rounds[i].mazoG === (j2 + "2")) {
                    r.mj1 = clasMazsJ2[1];
                }
                if (partido.rounds[i].mazoG === (j2 + "3")) {
                    r.mj1 = clasMazsJ2[2];
                }
                if (partido.rounds[i].mazoP === (j1 + "1")) {
                    r.mj2 = clasMazsJ1[0];
                }
                if (partido.rounds[i].mazoP === (j1 + "2")) {
                    r.mj2 = clasMazsJ1[1];
                }
                if (partido.rounds[i].mazoP === (j1 + "3")) {
                    r.mj2 = clasMazsJ1[2];
                }
                rou[i] = r;
            }
        }
    }

    var gan;
    if (r1 > r2) {
        gan = j1;
    }
    if (r1 < r2) {
        gan = j2;
    }
    if (r1 === r2) {
        gan = "-";
    }

    var jsonObj = new Object();
    jsonObj.id = id;
    jsonObj.fecha = fec;
    jsonObj.hora = hor;
    jsonObj.ganador = gan;
    jsonObj.jugador1 = j1;
    jsonObj.resultado1 = r1;
    jsonObj.jugador2 = j2;
    jsonObj.resultado2 = r2;
    jsonObj.rounds = rou;
    jsonObj.comentario = com;

    return jsonObj;
}

module.exports = {
    getPartidos
};
const mongoose = require('mongoose');
const Grupo = mongoose.model('Grupo');
const Jugador = mongoose.model('Jugador');
const Mazo = mongoose.model('Mazo');
const Usuario = mongoose.model('Usuario');
const Imagen = mongoose.model('Imagen');

var colJugadores;
var colGrupos;
var colMazos;
var colImagenes;

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
                            Imagen.find().exec((err, imagenes) => {
                                if (err) {
                                    res.status(400).json(err);
                                } else {
                                    colGrupos = grupos;
                                    colJugadores = jugadores;
                                    colMazos = mazos;
                                    colImagenes = imagenes;
                                    var grps = obtenerGrupos();
                                    if (req.user) {
                                        Usuario.findOne({'id': req.user.id}, (err, resultado) => {
                                            if (err) {
                                                res.status(400).json(err);
                                            } else {
                                                res.render('grupos', {usuario: resultado, grupo_1: grps[0], grupo_2: grps[1], grupo_3: grps[2], grupo_4: grps[3]});
                                            }
                                        });
                                    } else {
                                        res.render('grupos', {grupo_1: grps[0], grupo_2: grps[1], grupo_3: grps[2], grupo_4: grps[3]});
                                    }
                                }
                            });
                        }
                    });
                }
            });
        }
    });
};

function obtenerGrupos() {
    var resultado = new Array(colGrupos.length);
    for (var i = 0; i < colGrupos.length; i++) {
        resultado[i] = generarEstructuraGrupo(colGrupos[i]);
    }
    return resultado;
}

function obtenerJugador(nombreJugador) {
    for (var i = 0; i < colJugadores.length; i++) {
        if (colJugadores[i].nombre === nombreJugador) {
            return colJugadores[i];
        }
    }
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

function obtenerImagen(nombre){
    for (var i = 0; i < colImagenes.length; i++) {
        if(nombre === colImagenes[i].nombre){
            return colImagenes[i].imagen;
        }
    }
    return "";
}

function generarEstructuraGrupo(grupo) {
    var resultado = new Array(grupo.integrantes.length);
    for (var i = 0; i < grupo.integrantes.length; i++) {
        var nom = grupo.integrantes[i];

        var jug = obtenerJugador(nom);

        var pun = jug.puntaje;
        
        var img = obtenerImagen(nom);

        var fav = jug.idFavorito;

        var maz1 = jug.mazos[0];
        var maz2 = jug.mazos[1];
        var maz3 = jug.mazos[2];
        var clasMazs = obtenerClasesMazosJugador(maz1, maz2, maz3);

        var jsonObj = new Object();
        jsonObj.jugador = nom;
        jsonObj.puntaje = pun;
        jsonObj.imagen = img;
        jsonObj.favorito = fav;
        jsonObj.mazo1 = clasMazs[0];
        jsonObj.mazo2 = clasMazs[1];
        jsonObj.mazo3 = clasMazs[2];

        resultado[i] = jsonObj;
    }
    return resultado;
}

module.exports = {
    getGrupos
};
const mongoose = require('mongoose');
const Partido = mongoose.model('Partido');

var colPartidos;

const getPartidos = function (req, res) {
    Partido.find().exec((err, partidos) => {
        if (err) {
            res.status(404).json(err);
        } else {
            colPartidos = partidos;
            var prtds = obtenerPartidos();
            res.render('partidos', {partidos: prtds});
        }
    });
};

function obtenerPartidos(){
    var resultado = new Array(colPartidos.length);
    for (var i = 0; i < colPartidos.length; i++) {
        resultado[i] = generarEstructuraPartido(colPartidos[i]);
    }
    return resultado;
}

function generarEstructuraPartido(partido) {
    var fec = partido.fecha;

    var hor = partido.hora;
    
    var j1 = partido.jugador1;
    
    var j2 = partido.jugador2;
    
    var r1 = 0;
    var r2 = 0;
    
    for(var i = 0; i < partido.ganador.length; i++){
        if(partido.ganador[i] === 1){
            r1 += 1;
        }else{
            r2 += 1;
        }
    }

    var jsonObj = new Object();
    jsonObj.fecha = fec;
    jsonObj.hora = hor;
    jsonObj.jugador1 = j1;
    jsonObj.resultado1 = r1;
    jsonObj.jugador2 = j2;
    jsonObj.resultado2 = r2;

    return jsonObj;
}

module.exports = {
  getPartidos
};
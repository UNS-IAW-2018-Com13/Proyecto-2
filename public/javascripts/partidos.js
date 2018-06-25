function completarModalPartidos(partido) {
    var titulo = document.getElementById("tituloVentana");
    titulo.removeChild(titulo.firstChild);
    titulo.appendChild(document.createTextNode(partido.id));

    if (partido.ganador !== "-") {
        var imagenGanador = document.getElementById("imgGanador");
        imagenGanador.setAttribute("src", "images/portraits/portrait" + partido.ganador + ".jpg");
    }

    var titTablaJ1 = document.getElementById("titJugador1");
    titTablaJ1.removeChild(titTablaJ1.firstChild);
    titTablaJ1.appendChild(document.createTextNode(partido.jugador1));

    var titTablaJ2 = document.getElementById("titJugador2");
    titTablaJ2.removeChild(titTablaJ2.firstChild);
    titTablaJ2.appendChild(document.createTextNode(partido.jugador2));

    for (var i = 0; i < partido.rounds.length; i++) {
        if (partido.rounds[i].mj1 !== "-") {
            var imgMazoJ1 = document.getElementById("imgMJ1R" + (i + 1));
            if(partido.rounds[i].ganador === 1){
                imgMazoJ1.setAttribute("src", "images/icons/" + partido.rounds[i].mj1 + ".png");
            }else{
                imgMazoJ1.setAttribute("src", "images/icons/" + partido.rounds[i].mj1 + "L.png");
            }
        }

        if (partido.rounds[i].mj2 !== "-") {
            var imgMazoJ2 = document.getElementById("imgMJ2R" + (i + 1));
            if(partido.rounds[i].ganador === 2){
                imgMazoJ2.setAttribute("src", "images/icons/" + partido.rounds[i].mj2 + ".png");
            }else{
                imgMazoJ2.setAttribute("src", "images/icons/" + partido.rounds[i].mj2 + "L.png");
            }
        }
    }

    if (partido.coment !== "-") {
        var comentario = document.getElementById("coment");
        comentario.removeChild(comentario.firstChild);
        comentario.appendChild(document.createTextNode(partido.coment));
    }
}
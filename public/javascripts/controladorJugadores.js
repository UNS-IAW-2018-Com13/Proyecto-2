let jugadores;

$(init);

function init() {
    $.get("./api/jugadores", function(data, status) {
        jugadores = new Map(data.map((jugador) => [getId(jugador), jugador]));
        mostrarJugadores(jugadores);
    });
}

function getId(jugador) {
    return jugador._id;
}

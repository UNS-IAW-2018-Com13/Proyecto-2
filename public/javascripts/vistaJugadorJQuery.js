const jugadorTemplate = Twig.twig({
    href: "renderJugador.twig",async:false
});

function mostrarJugadores(jugadores) {
    let index;

    $.each(jugadores, function(index, jugador) {
        agregarJugador(id, jugador);
    });
}

function agregarJugador(id, jugador) {
    var row = $(jugadorTemplate.render({"jugador": jugador})).attr("id", id);
    $("#tabla").append(row);
}

function guardarEstilo(idEstilo) {
    $.post('/estilos/guardar_estilo', {'estilo': idEstilo}, function (req, res) {
        console.log("guardar estilo: " + res);
        localStorage.setItem("Estilo", idEstilo);
    });
}

function obtenerEstilo() {
    var estilo = localStorage.getItem("Estilo");
    if (estilo === null) {
        estilo = "Standard";
    }
    return estilo;
}

function obtenerFavorito(jnom) {
    var fav = localStorage.getItem(jnom);
    if (fav === null) {
        fav = "no";
    }
    return fav;
}

function guardarFavorito(jnom, fav) {
    localStorage.setItem(jnom, fav);
}
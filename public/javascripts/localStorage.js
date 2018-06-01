
function guardarEstilo(idEstilo) {
    /*
    $.post('/estilos/guardar_estilo', {'estilo': idEstilo}, function (req, res) {
        localStorage.setItem("Estilo", idEstilo);
    });
    */
    localStorage.setItem("Estilo", idEstilo);
}

function obtenerEstilo() {
    /*
    $.get('/estilos/cargar_estilo', function (res, req) {
        
    });
    */
    var est = localStorage.getItem("Estilo");
    if (est === null) {
        est = "Standard";
    }
    return est;
}

function obtenerFavorito(jnom) {
    var est = localStorage.getItem(jnom);
    if (est === null) {
        est = "no";
    }
    return est;
}

function guardarFavorito(jnom, est) {
    localStorage.setItem(jnom, est);
}
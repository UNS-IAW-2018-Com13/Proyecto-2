
function guardarEstilo(idEstilo) {
    $.post('/auth/guardar_estilo', {'estilo': idEstilo}, function (req, res) {
        localStorage.setItem("Estilo", idEstilo);
    });
}

function obtenerEstilo() {
    $.get('/auth/cargar_estilo', function (res, req) {
        console.log(res.estilo);
        /*
        var est = localStorage.getItem("Estilo");
        if (est === null) {
            est = "Standard";
        }
        */
        return res.estilo;
    });
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
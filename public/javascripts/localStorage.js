
function guardarEstilo(usuario, idEstilo) {
    if (usuario) {
        $.post('/estilos/guardar_estilo', {'estilo': idEstilo}, function (req, res) {
            localStorage.setItem("Estilo", idEstilo);
        });
    }else {
        localStorage.setItem("Estilo", idEstilo);
    }

}

function obtenerEstilo(usuario) {
    var estilo;
    if (usuario) {
        estilo = usuario.estilo;
    } else {
        estilo = localStorage.getItem("Estilo");
        if (estilo === null) {
            est = "Standard";
        }
    }
    return estilo;
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
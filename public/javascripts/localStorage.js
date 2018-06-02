
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
        $.get('/estilos/cargar_estilo', function (req, res) {
            return res.estilo;
        });
    } else {
        estilo = localStorage.getItem("Estilo");
        if (estilo === null) {
            estilo = "Standard";
        }
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
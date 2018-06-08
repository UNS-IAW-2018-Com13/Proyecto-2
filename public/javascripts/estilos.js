function cargar(estilo, favoritos) {
    if (estilo === "") {
        var est = obtenerEstilo();
        if (est !== "Standard") {
            cambiarEstilo(est, "dropMenu");
        } else {
            var pag = document.getElementById("IDPAG");
            if (pag !== null) {
                obtenerImagenes(est);
            }
        }
    } else {
        localStorage.setItem("Estilo", estilo);
        localStorage.setItem("Favoritos", JSON.stringify(favoritos));
    }
}

function cambiarEstilo(idEstilo, idBarra) {
    var tituloDesp = document.getElementById(idBarra);
    tituloDesp.removeChild(tituloDesp.lastChild);
    var linkEstilo = document.getElementById("maincss");
    linkEstilo.href = "/stylesheets/" + idEstilo + ".css";
    var titDesp = document.createTextNode(idEstilo);
    tituloDesp.appendChild(titDesp);
    var pag = document.getElementById("IDPAG");
    if (pag !== null) {
        obtenerImagenes(idEstilo);
    }
    guardarEstilo(idEstilo);

}

function guardarEstilo(idEstilo) {
    $.post('/estilos/guardar_estilo', {'estilo': idEstilo}, function (req, res) {
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
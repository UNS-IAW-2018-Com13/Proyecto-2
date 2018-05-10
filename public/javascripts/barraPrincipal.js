
function cambiarEstilo(idEstilo, idBarra) {
    var tituloDesp = document.getElementById(idBarra);
    tituloDesp.removeChild(tituloDesp.lastChild);
    var linkEstilo = document.getElementById("maincss");
    linkEstilo.href = "/stylesheets/" + idEstilo + ".css";
    var titDesp = document.createTextNode(idEstilo);
    tituloDesp.appendChild(titDesp);
    guardarEstilo(idEstilo);
}

function primeraCarga() {
    var estilo = obtenerEstilo();
    cambiarEstilo(estilo, "dropMenu");
}
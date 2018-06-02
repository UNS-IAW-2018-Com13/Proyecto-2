
function cambiarEstilo(usuario, idEstilo, idBarra) {
    var tituloDesp = document.getElementById(idBarra);
    tituloDesp.removeChild(tituloDesp.lastChild);
    var linkEstilo = document.getElementById("maincss");
    linkEstilo.href = "/stylesheets/" + idEstilo + ".css";
    var titDesp = document.createTextNode(idEstilo);
    tituloDesp.appendChild(titDesp);
    guardarEstilo(usuario, idEstilo);
}

function primeraCarga(usuario) {
    var pag = document.getElementById("IDPAG");
    if(pag !== null){
        obtenerImagenes();
    }
    var estilo = obtenerEstilo(usuario);
    cambiarEstilo(usuario, estilo, "dropMenu");   
}
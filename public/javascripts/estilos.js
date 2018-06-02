function cargar(estilo) {
    var pag = document.getElementById("IDPAG");
    if(pag !== null){
        obtenerImagenes();
    }
    if(estilo === ""){
        var est = obtenerEstilo();
        console.log(est);
        if(est !== "Standard"){
            cambiarEstilo(est, "dropMenu");
        } 
    }  
}

function cambiarEstilo(idEstilo, idBarra) {
    var tituloDesp = document.getElementById(idBarra);
    tituloDesp.removeChild(tituloDesp.lastChild);
    var linkEstilo = document.getElementById("maincss");
    linkEstilo.href = "/stylesheets/" + idEstilo + ".css";
    var titDesp = document.createTextNode(idEstilo);
    tituloDesp.appendChild(titDesp);
    guardarEstilo(idEstilo);
}

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
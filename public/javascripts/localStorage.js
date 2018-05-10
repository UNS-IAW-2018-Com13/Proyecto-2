
function guardarEstilo(idEstilo) {
    localStorage.setItem("Estilo", idEstilo);
}

function obtenerEstilo() {
    var est = localStorage.getItem("Estilo");
    if(est === null){
        est = "Standard";
    }
    return est;
}

function obtenerFavorito(jnom) {
    var est = localStorage.getItem(jnom);
    if(est === null){
        est = "no";
    }
    return est;
}

function guardarFavorito(jnom, est) {
    localStorage.setItem(jnom, est);
}
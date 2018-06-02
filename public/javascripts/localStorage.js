
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
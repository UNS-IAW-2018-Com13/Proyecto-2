
function setearFavorito(jnom) {
    var estilo = obtenerEstilo();
    var fav = obtenerFavorito(jnom);
    if (fav === "no") {
        guardarFavorito(jnom, "si");
        if (estilo === "Standard") {
            document.getElementById(jnom).src = "/images/icons/fav_std.png";
        } else {
            document.getElementById(jnom).src = "/images/icons/fav_nax.png";
        }
    } else {
        guardarFavorito(jnom, "no");
        if (estilo === "Standard") {
            document.getElementById(jnom).src = "/images/icons/no_fav_std.png";
        } else {
            document.getElementById(jnom).src = "/images/icons/no_fav_nax.png";
        }
    }
}

function obtenerImagenes() {
    var imgs = document.getElementsByName("iconoFav");
    var estilo = obtenerEstilo();
    var fav;
    for (var i = 0; i < 16; i++) {
        fav = obtenerFavorito(imgs[i].id);
        if (fav === "no") {
            if (estilo === "Standard") {
                imgs[i].src = "/images/icons/no_fav_std.png";
            } else {
                imgs[i].src = "/images/icons/no_fav_nax.png";
            }
        } else {
            if (estilo === "Standard") {
                imgs[i].src = "/images/icons/fav_std.png";
            } else {
                imgs[i].src = "/images/icons/fav_nax.png";
            }
        }
    }


}
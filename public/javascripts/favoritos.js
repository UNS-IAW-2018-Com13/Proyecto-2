function obtenerImagenes(estilo) {
    var fav;
    for (var i = 0; i < 16; i++) {
        fav = obtenerFavorito(i);
        if (fav === 0) {
            if (estilo === "Standard") {
                document.getElementById(i).src = "/images/icons/no_fav_std.png";
            } else {
                document.getElementById(i).src = "/images/icons/no_fav_nax.png";
            }
        } else {
            if (estilo === "Standard") {
                document.getElementById(i).src = "/images/icons/fav_std.png";
            } else {
                document.getElementById(i).src = "/images/icons/fav_nax.png";
            }
        }
    }
}

function setearFavorito(idFav) {
    var estilo = obtenerEstilo();
    var fav = obtenerFavorito(idFav);
    if (fav === 0) {
        guardarFavorito(idFav, 1);
        if (estilo === "Standard") {
            document.getElementById(idFav).src = "/images/icons/fav_std.png";
        } else {
            document.getElementById(idFav).src = "/images/icons/fav_nax.png";
        }
    } else {
        guardarFavorito(idFav, 0);
        if (estilo === "Standard") {
            document.getElementById(idFav).src = "/images/icons/no_fav_std.png";
        } else {
            document.getElementById(idFav).src = "/images/icons/no_fav_nax.png";
        }
    }
}

function obtenerFavorito(idFav) {
    var fav = localStorage.getItem("Favoritos");
    if (fav === null) {
        return 0;
    }
    var res = JSON.parse(fav);
    return res[idFav];
}

function obtenerTodosFavoritos() {
    var fav = localStorage.getItem("Favoritos");
    if (fav === null) {
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    return JSON.parse(fav);
}

function guardarFavorito(idFav, fav) {
    var favoritos = obtenerTodosFavoritos();
    favoritos[idFav] = fav;
    $.post('/favoritos/guardar_favoritos', {'favoritos': favoritos, 'idFavorito': idFav, 'fav': fav}, function (res, req) {
        localStorage.setItem("Favoritos", JSON.stringify(favoritos));
    });
}
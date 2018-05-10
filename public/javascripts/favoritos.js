function controlarLogin(jnom) {
    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            setearFavoritos(jnom);
        } else{
            FB.login();
        }
    });
}

function setearFavorito(jnom) {
    var estilo = obtenerEstilo();
    var fav = obtenerFavorito(jnom);
    if (fav === "no") {
        guardarFavorito(jnom, "si");
        if (estilo === "Standard") {
            document.getElementById(jnom).setAttribute("src", "/images/icons/fav_std.png");
        } else {
            document.getElementById(jnom).setAttribute("src", "/images/icons/fav_nax.png");
        }
    } else {
        guardarFavorito(jnom, "no");
        //if (estilo === "Standard") {
        document.getElementById(jnom).setAttribute("src", "/images/icons/no_fav_std.png");
        //} else {
        //document.getElementById(jnom).setAttribute("src", "/images/icons/no_fav_nax.png");
        //}
    }
}

function obtenerImagenes() {
    var imgs = document.getElementsByName();
    var estilo = obtenerEstilo();
    var fav;
    for (var img in imgs) {
        fav = obtenerFavorito(img.id);
        if (fav === "no") {
            if (estilo === "Standard") {
                img.setAttribute("src", "/images/icons/no_fav_std.png");
            } else {
                img.setAttribute("src", "/images/icons/no_fav_nax.png");
            }
        } else {
            if (estilo === "Standard") {
                img.setAttribute("src", "/images/icons/fav_std.png");
            } else {
                img.setAttribute("src", "/images/icons/fav_nax.png");
            }
        }
    }


}
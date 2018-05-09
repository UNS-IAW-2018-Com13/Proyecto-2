function seleccionarFavoritos(jnom) {
    FB.api('/me', function (response) {
        if (response === "connected") {
            document.getElementById("iconoFav" + jnom).src = "/images/icons/fav_std.png";
        } else {
            window.alert("Tenes que loguearte con facebook para poder seleccionar favoritos.");
        }
    });
}
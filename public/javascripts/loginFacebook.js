
function statusChangeCallback(response) {
    if (response.status === 'connected') {
        cargarDatosUsuario();
    } else {
    }
}

function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}

window.fbAsyncInit = function () {
    FB.init({
        appId: '177693619614275',
        cookie: true,
        xfbml: true,
        version: 'v2.8'
    });
    
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id))
        return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/es_AL/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function cargarDatosUsuario(){
    FB.api('/me', function (response) {
        $.post('/', {"idUser": response.id}, function(req, res){
            //var estilo = res.body.estilo;
            //var favoritos = res.body.favoritos;
            //guardarDatos(estilo, favoritos);
        });
    });
}

function guardarDatos(idEstilo, favs){
    localStorage.setItem("Estilo",idEstilo);
    localStorage.setItem("Favoritos",favs);
}

function obtenerEstilo(){
    return localStorage.getItem("Estilo");
}

function obtenerFavoritos(){
    return localStorage.getItem("Favoritos");
}

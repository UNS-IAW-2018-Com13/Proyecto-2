
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
        //cargarDatos();
        desactivarFavoritos();
    } else {
        //desactivarFavoritos();
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

function cargarDatos(){
    FB.api('/me', function (response) {
        console.log('Successful login for: ' + response.name);
        document.getElementById('status').innerHTML = response.name;
    });
}

function desactivarFavoritos(){
    FB.api('/me', function (response) {
        console.log(response);
        $.post('/', {"nombre": response.name, "id": response.id});
    });
}
function postear(){
    $.post('/', {nombre:"ASD"},function(request, response) {
        document.getElementById("prueba").appendChild(document.createTextNode("ASDASD"));
    });
}
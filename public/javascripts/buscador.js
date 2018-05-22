function buscarCarta() {
    $.post('/buscador/g_carta', {'carta': document.getElementById("texto").value}, function (res, req) {
        console.log("RES: " + res.respuesta);
        console.log("REQ: " + req);
    });
}
function buscar(criterio){    
    $.post('/buscador/g_carta', {'carta': document.getElementById(criterio).value}, function (res, req) {
        console.log("RES: " + res.respuesta);
        console.log("REQ: " + req);
        });
}
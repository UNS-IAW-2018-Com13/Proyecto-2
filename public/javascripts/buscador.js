<<<<<<< HEAD
function buscar(criterio){    
    $.post("/buscador/g_carta", {'crit': document.getElementById(criterio).value});
=======
function buscarCarta() {
    $.post('/buscador/g_carta', {'carta': document.getElementById("texto").value}, function (res, req) {
        console.log("RES: " + res.respuesta);
        console.log("REQ: " + req);
    });
>>>>>>> 941d2dea68720de64e246ebdbdac8838cc161a00
}
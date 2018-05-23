function buscar(criterio) {
    var gal = document.getElementById("resultado");

    $.post('/buscador/g_carta', {'carta': document.getElementById(criterio).value}, function (res, req) {
        if (res.error === 404)
            gal.appendChild(document.createTextNode(res.message));
        else {
            while (gal.firstChild) {
                gal.removeChild(gal.firstChild);
            }
            for (var i = 0; i < res.length; i++) {
                foto = document.createElement("img");
                foto.setAttribute("class","img-fluid");
                
                foto.setAttribute("src", res[i].imgGold);
                //foto.setAttribute("height", 150);
                //foto.setAttribute("width", 100);
                gal.appendChild(foto);
            }
        }
    });
}
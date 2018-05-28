function buscar(criterio) {
    var gal = document.getElementById("resultado");

    $.post('/buscador/g_carta', {'carta': document.getElementById(criterio).value}, function (res, req) {
        while (gal.firstChild) {
            gal.removeChild(gal.firstChild);
        }
        if (document.getElementById(criterio).value.length < 3)
            gal.appendChild(document.createTextNode("El criterio de búsqueda es muy corto"));
        else
        if (res.hasOwnProperty("error"))
            gal.appendChild(document.createTextNode(res.error));

        else
        if (res.length === 0)
            gal.appendChild(document.createTextNode("No existen resultados con: " + document.getElementById(criterio).value));
        else
            for (var i = 0; i < res.length; i++) {
                foto = document.createElement("img");
                foto.setAttribute("id", "imgN" + i);
                foto.setAttribute("alt", res[i].name);

                foto.setAttribute("class", "img-fluid");

                foto.setAttribute("onclick",
                        "cambiar('imgN" + i +
                        "','" + res[i].img +
                        "','" + res[i].imgGold + "')");

                foto.setAttribute("src", res[i].img);
                foto.setAttribute("src", res[i].img);

                gal.appendChild(foto);
            }
    });
}


function cambiar(id, normal, gold) {
    var i = document.getElementById(id);
    if (i.src === normal)
        i.src = gold;
    else
        i.src = normal;

}


function pressEnter(criterio, event) {
    var x = event.which || event.keyCode;
    if (x === 13)
        buscar(criterio);
}
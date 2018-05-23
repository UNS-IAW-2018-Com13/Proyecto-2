function buscar(criterio){    
    $.post("/buscador/g_carta", {'crit': document.getElementById(criterio).value});
}
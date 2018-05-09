function buscarcartas() {
    nombre=document.getElementById("parametro").value;
    
    $.post('/estadisticas', {"nombre": nombre}, function(req, res){
        document.getElementById("resultados").appendChild(document.createTextNode(res.body.algo));
    });
}


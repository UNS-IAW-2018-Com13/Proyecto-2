function createMainBar(barID) {

    //recupero el css de la barra, si no existe, lo creo
    st = document.getElementById("barraPrincipal");
    if (st === null) {
        st = document.createElement("link");
        st.id = "barraPrincipal";
        st.setAttribute("rel", "stylesheet");
        st.setAttribute("href", "/stylesheets/barraPrincipal.css");
        document.head.insertBefore(st, document.getElementById("maincss"));
    }

    //crea la barra
    function barra(ID) {
        bar = document.createElement("nav");
        bar.id = ID;
        bar.setAttribute("class", "navbar navbar-expand-lg navbar-dark");
        return bar;
    }

    //boton principal con icono
    function Icono() {
        mainicon = document.createElement("a");
        mainicon.setAttribute("class", "navbar-brand");
        mainicon.setAttribute("href", "/");
        micon = document.createElement("img");
        micon.setAttribute("src", "/images/icons/icono.png");
        micon.width = "40";
        micon.height = "40";
        mainicon.appendChild(micon);

        return mainicon;
    }

    function Boton(IDdata) {
        boton = document.createElement("button");
        boton.setAttribute("class", "navbar-toggler");
        boton.setAttribute("type", "button");
        boton.setAttribute("data-toggle", "collapse");
        boton.setAttribute("data-target", "#" + IDdata);
        boton.setAttribute("aria-controls", IDdata);
        boton.setAttribute("aria-expanded", "false");
        boton.setAttribute("aria-label", "Toggle navigation");
        clasico = document.createElement("span");
        clasico.setAttribute("class", "navbar-toggler-icon");
        boton.appendChild(clasico);

        return boton;
    }

    function Menu(IDdata) {
        cont = document.createElement("div");
        cont.setAttribute("class", "collapse navbar-collapse");
        cont.setAttribute("id", IDdata);

        donauto = document.createElement("ul");
        donauto.setAttribute("class", "navbar-nav mr-auto mt-2 mt-lg-0");

        item = document.createElement("li");
        item.setAttribute("class", "nav-item");
        itemA = document.createElement("a");
        itemA.setAttribute("class", "nav-link");
        itemA.setAttribute("href", "jugadores");
        itemA.appendChild(document.createTextNode("Jugadores"));
        item.appendChild(itemA);
        donauto.appendChild(item);

        item = document.createElement("li");
        item.setAttribute("class", "nav-item");
        itemA = document.createElement("a");
        itemA.setAttribute("class", "nav-link");
        itemA.setAttribute("href", "grupos");
        itemA.appendChild(document.createTextNode("Grupos"));
        item.appendChild(itemA);
        donauto.appendChild(item);


        item = document.createElement("li");
        item.setAttribute("class", "nav-item");
        itemA = document.createElement("a");
        itemA.setAttribute("class", "nav-link");
        itemA.setAttribute("href", "partidos");
        itemA.appendChild(document.createTextNode("Partidos"));
        item.appendChild(itemA);
        donauto.appendChild(item);


        item = document.createElement("li");
        item.setAttribute("class", "nav-item");
        itemA = document.createElement("a");
        itemA.setAttribute("class", "nav-link");
        itemA.setAttribute("href", "estadisticas");
        itemA.appendChild(document.createTextNode("Estadisticas"));
        item.appendChild(itemA);
        donauto.appendChild(item);       
        
        cont.appendChild(donauto);
        return cont;
    }

    function Desplegable(dropID) {
        ulEstilos= document.createElement("ul");
        ulEstilos.setAttribute("class", "navbar-nav");
        liEstilos= document.createElement("li");
        liEstilos.setAttribute("class", "nav-item dropdown");
        aEstilos= document.createElement("a");
        aEstilos.setAttribute("class", "nav-link dropdown-toggle");
        aEstilos.setAttribute("id", dropID);
        aEstilos.setAttribute("href", "#");
        aEstilos.setAttribute("data-toggle", "dropdown");
        aEstilos.setAttribute("aria-haspopup", "true");
        aEstilos.setAttribute("aria-expanded", "false");
        
        divEstilos= document.createElement("div");        
        divEstilos.setAttribute("class", "dropdown-menu");
        divEstilos.setAttribute("aria-labelledby", dropID);
        
        aEstilos.appendChild(divEstilos);
        liEstilos.appendChild(aEstilos);
        ulEstilos.appendChild(liEstilos);
        
        aOpcion = document.createElement("a");
        aOpcion.setAttribute("class", "dropdown-item");
        aOpcion.id = "desplegableI";
        aOpcion.setAttribute("onclick", "cambiarEstilo('Standard','"+dropID+"')");
        titulo = document.createTextNode("Standard");
        aOpcion.appendChild(titulo);
        divEstilos.appendChild(aOpcion);

        aOpcion = document.createElement("a");
        aOpcion.id = "desplegableI";
        aOpcion.setAttribute("class", "dropdown-item");
        aOpcion.setAttribute("onclick", "cambiarEstilo('Naxxramas','"+dropID+"')");
        titulo = document.createTextNode("Naxxramas");

        aOpcion.appendChild(titulo);
        divEstilos.appendChild(aOpcion);   
        est = obtenerEstilo();
        if (est !== null) {
            titDesp = document.createTextNode(est);
        } else {
            titDesp = document.createTextNode("Estilos");
        }          
        aEstilos.appendChild(titDesp);
        return ulEstilos;
    }

    bar = barra(barID);
    bar.appendChild(Icono());
    bar.appendChild(Boton("menuElements"));  
    menu= Menu("menuElements");
    menu.appendChild(Desplegable("dropMenu"));
    bar.appendChild(menu);    
    document.body.insertBefore(bar, document.body.getElementsByTagName("*")[0]);

}


function guardarEstilo(idEstilo) {
    localStorage.setItem("Estilo", idEstilo);
}

function obtenerEstilo() {
    return localStorage.getItem("Estilo");
}

function cambiarEstilo(idEstilo, idBarra) {
    var tituloDesp = document.getElementById(idBarra);
    tituloDesp.removeChild(tituloDesp.lastChild);
    var linkEstilo = document.getElementById("maincss");
    linkEstilo.href = "/stylesheets/" + idEstilo + ".css";
    var titDesp = document.createTextNode(idEstilo);
    tituloDesp.appendChild(titDesp);
    guardarEstilo(idEstilo);
}
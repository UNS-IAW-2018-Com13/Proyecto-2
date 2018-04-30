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
        mainicon.setAttribute("href", "#");
        micon = document.createElement("img");
        micon.setAttribute("src", "./imagenes/icon.png");
        micon.width = "40";
        micon.height = "40";
        mainicon.appendChild(micon);
        
        mainicon.setAttribute("onclick","openNav('contenido', 'barra')");
        
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
        
        donauto= document.createElement("ul");
        donauto.setAttribute("class", "navbar-nav mr-auto mt-2 mt-lg-0");
        
        item= document.createElement("li");
        item.setAttribute("class", "nav-item");
        itemA= document.createElement("a");
        itemA.setAttribute("class", "nav-link");
        itemA.setAttribute("href", "#");
        itemA.appendChild(document.createTextNode("asd1"));
        item.appendChild(itemA);
        donauto.appendChild(item);
        
        item= document.createElement("li");
        item.setAttribute("class", "nav-item");
        itemA= document.createElement("a");
        itemA.setAttribute("class", "nav-link");
        itemA.setAttribute("href", "#");
        itemA.appendChild(document.createTextNode("asd2"));
        item.appendChild(itemA);        
        donauto.appendChild(item);
        
        cont.appendChild(donauto);        
        return cont;
    }

    bar = barra(barID);

    bar.appendChild(Icono());
    bar.appendChild(Boton("asd"));
    bar.appendChild(Menu("asd"));

    document.body.insertBefore(bar, document.body.getElementsByTagName("*")[0]);
}
function completarModalJugadores(nombre, puntaje, favorito, I1, I2, I3){
   var titulo = document.getElementById("tituloVentana");
   titulo.removeChild(titulo.firstChild);
   titulo.appendChild(document.createTextNode(nombre));
   
   var nombreJugador = document.getElementById("nombreJugador");
   nombreJugador.removeChild(nombreJugador.firstChild);
   nombreJugador.appendChild(document.createTextNode(nombre));
   
   var puntajeJugador = document.getElementById("puntajeJugador");
   puntajeJugador.removeChild(puntajeJugador.firstChild);
   puntajeJugador.appendChild(document.createTextNode(puntaje));
   
   var favoritoJugador = document.getElementById("favoritoJugador");
   favoritoJugador.removeChild(favoritoJugador.firstChild);
   favoritoJugador.appendChild(document.createTextNode(favorito));
   
   var avatar = document.getElementById("avatarJugador");
   avatar.setAttribute("src","images/portraits/portrait"+nombre+".jpg");
   avatar.setAttribute("width", "150");
   avatar.setAttribute("height", "150");
   
   var mazo1 = document.getElementById("imagenMazo1");
   mazo1.setAttribute("src","images/icons/"+I1+".png");
   mazo1.setAttribute("width", "50");
   mazo1.setAttribute("height", "50");
   
   var mazo2 = document.getElementById("imagenMazo2");
   mazo2.setAttribute("src","images/icons/"+I2+".png");
   mazo2.setAttribute("width", "50");
   mazo2.setAttribute("height", "50");
   
   var mazo3 = document.getElementById("imagenMazo3");
   mazo3.setAttribute("src","images/icons/"+I3+".png");
   mazo3.setAttribute("width", "50");
   mazo3.setAttribute("height", "50");
 }
jugar=function(seleccionado){
    let elemento;
    let ruta;
    let ganador;
    
    elemento=generarElemento();
    ruta=generarRuta(elemento);
    mostrarImagen("imgSeleccionPC",ruta);
    ganador=determinarGanador(elemento,seleccionado);
    if(ganador==0){
        mostrarTexto("lblResultado","Empate!");
    }else if(ganador==1){
        mostrarTexto("lblResultado","Perdiste la partida!");
    }else if(ganador==2){
        mostrarTexto("lblResultado","Ganaste la partida!");
    }

}

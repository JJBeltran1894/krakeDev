let puntajeUsuario=0;
let puntajeComputador=0;

jugar=function(seleccionado){
    let elemento;
    let ruta;
    let ganador;
    
    elemento=generarElemento();
    ruta=generarRuta(elemento);
    mostrarImagen("imgSeleccionPC",ruta);
    ganador=determinarGanador(elemento,seleccionado);
    if(ganador==0){
        mostrarTexto("lblResultadoPartida","Empate!");
    }else if(ganador==1){
        mostrarTexto("lblResultadoPartida","Perdiste la partida!");
        puntajeComputador=puntajeComputador+1;
        mostrarTexto("lblPuntosComputador",puntajeComputador);
    }else if(ganador==2){
        mostrarTexto("lblResultadoPartida","Ganaste la partida!");
        puntajeUsuario=puntajeUsuario+1;
        mostrarTexto("lblPuntosUsuario",puntajeUsuario);
    }
    if(puntajeUsuario==5){
       mostrarTexto("lblResultadoPartida","Haz Ganado el Juego!"); 
    }else if(puntajeComputador==5){
       mostrarTexto("lblResultadoPartida","El Computador te ha vencido"); 
    }

}

limpiar=function(){
    mostrarImagen("imgSeleccionPC","");
    mostrarTexto("lblResultadoPartida", "");
    mostrarTexto("lblPuntosComputador", "0");
    mostrarTexto("lblPuntosUsuario", "0");
    puntajeComputador=0;
    puntajeUsuario=0;
}

obtenerAleatorio=function(){
    numero=parseInt(Math.random()*3)+1;
    console.log(numero);
    return numero;
}

generarElemento=function(){
    let numero=obtenerAleatorio();
    let elemento;
    if(numero==1){
        elemento="piedra";
    }else if(numero==2){
        elemento="papel";
    }else if(numero==3){
        elemento="tijera";
    }
    return elemento
}

determinarGanador=function(eleccionJuagdor1,eleccionJuagdor2){
    let ganador;
    if(eleccionJuagdor1==eleccionJuagdor2){
        ganador=0;
    }else if(eleccionJuagdor1=="piedra" & eleccionJuagdor2=="papel"){
        ganador=2;
    }else if(eleccionJuagdor1=="piedra"& eleccionJuagdor2=="tijera"){
        ganador=1;
    }else if(eleccionJuagdor1=="papel"& eleccionJuagdor2=="piedra"){
        ganador=1;
    }else if(eleccionJuagdor1=="papel"& eleccionJuagdor2=="tijera"){
        ganador=2;
    }else if(eleccionJuagdor1=="tijera"& eleccionJuagdor2=="piedra"){
        ganador=2;
    }else if(eleccionJuagdor1=="tijera"& eleccionJuagdor2=="papel"){
        ganador=1;
    }
    return ganador;
}

generarRuta=function(seleccion){
    let ruta="./imagenes/"+seleccion+".png";
    return ruta;
}
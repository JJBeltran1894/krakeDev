recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado
}

recuperarInt=function(idComponente){
    let valorInt=parseInt(recuperarTexto(idComponente));
    return valorInt
}

recuperarFloat=function(idComponente){
    let valorFloat=parseFloat(recuperarTexto(idComponente));
    return valorFloat
}

mostrarTexto=function(idComponente,mensaje){
    let componente=document.getElementById(idComponente);
    componente.innerText=mensaje;
}

mostrarImagen=function(idComponente,rutaImagen){
    let componente=document.getElementById(idComponente);
    componente.src=rutaImagen;
}

mostrarTextoEnCaja=function(idComponente,mensaje){
    let componente=document.getElementById(idComponente);
    componente.value=mensaje;
}
saludar=function(){
    //recupera el valor de la caja de texto nombre
    let nombre=recuperarTexto("txtNombre");
    //recupera el valor de la caja de texto apellido
    let apellido=recuperarTexto("txtApellido");
    //recupera el valor de la caja de texto edad
    let edad=recuperarInt("txtEdad");
    //recupera el valor de la caja de texto estatura
    let estatura=recuperarFloat("txtEstatura");
    let mensajeBienvenida="Bienvenido "+nombre+" "+apellido;
    mostrarTexto("lblResultado",mensajeBienvenida);
    mostrarImagen("imgSaludo","imagenes/pandaSaludo.gif");
    mostrarTextoEnCaja("txtNombre","")
}

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
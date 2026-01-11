saludar=function(){
    //recupera el valor de la caja de texto nombre
    let nombre=recuperarTexto("txtNombre");
    //recupera el valor de la caja de texto apellido
    let apellido=recuperarTexto("txtApellido");
    //recupera el valor de la caja de texto edad
    let edad=recuperarInt("txtEdad");
    //recupera el valor de la caja de texto estatura
    let estatura=recuperarFloat("txtEstatura");

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
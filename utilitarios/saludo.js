saludar=function(){
    //recupera el valor de la caja de texto nombre
    let nombre=recuperarTexto("txtNombre");
    //recupera el valor de la caja de texto apellido
    let apellido=recuperarTexto("txtApellido");
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado
}
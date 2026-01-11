
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


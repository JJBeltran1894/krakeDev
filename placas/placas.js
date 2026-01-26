validarPlaca=function(){
    let placa;
    let erroresEstructura;
    placa=recuperarTexto("txtPlaca");
    erroresEstructura=validarEstructura(placa);
    if(erroresEstructura==""){
        mostrarTexto("lblValida","Estructura Valida");
        mostrarTexto("lblValidacionEstructura","");
        provincia=obtenerProvincia(placa);
        if(provincia==""){
            mostrarTexto("lblProvincia","Provincia Incorrecta");
        }else{
            mostrarTexto("lblProvincia",provincia);
        }
    }else{
        mostrarTexto("lblValida","Estructura Incorrecta");
        mostrarTexto("lblValidacionEstructura",erroresEstructura);
    }
}
validarPlaca=function(){
    let placa;
    let erroresEstructura;
    placa=recuperarTexto("txtPlaca");
    erroresEstructura=validarEstructura(placa);
    if(erroresEstructura==""){
        mostrarTexto("lblValida","Estructura Valida");
        mostrarTexto("lblValidacionEstructura","");
    }else{
        mostrarTexto("lblValida","Estructura Incorrecta");
        mostrarTexto("lblValidacionEstructura",erroresEstructura);
    }
}
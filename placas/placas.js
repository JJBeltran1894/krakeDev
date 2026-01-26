validarPlaca=function(){
    let placa;
    let erroresEstructura;
    let provincia;
    let tipo;
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
        tipo=obtenerTipoVehiculo(placa);
        if(tipo==""){
            mostrarTexto("lblTipo","Vehiculo Incorrecto");
        }else{
            mostrarTexto("lblTipo",tipo);
        }

    }else{
        mostrarTexto("lblValida","Estructura Incorrecta");
        mostrarTexto("lblValidacionEstructura",erroresEstructura);
    }
}
validarEstructura=function(placa){
    let mensajeError="";
    if(placa.length==7 || placa.length==8){
        if(esMayuscula(placa.charAt(0))){

        }else{
            mensajeError="| El primer caracter debe ser una letra mayuscula ";
        }
        if(esMayuscula(placa.charAt(1))){

        }else{
            mensajeError=mensajeError+"\n| El segundo caracter debe ser una letra mayuscula ";
        }
        if(esMayuscula(placa.charAt(2))){

        }else{
            mensajeError=mensajeError+"\n| El tercer caracter debe ser una letra mayuscula ";
        }
        if(esGuion(placa.charAt(3))){

        }else{
            mensajeError=mensajeError+"\n| El cuarto caracter debe ser un guion ";
        }
        if(esDigito(placa.charAt(4))){

        }else{
            mensajeError=mensajeError+"\n| El quinto caracter debe ser un digito ";
        }
        if(esDigito(placa.charAt(5))){

        }else{
            mensajeError=mensajeError+"\n| El sexto caracter debe ser un digito ";
        }
        if(esDigito(placa.charAt(6))){
            
        }else{
            mensajeError=mensajeError+"\n| El septimo caracter debe ser un digito ";
        }
        if(placa.length==8){
            if(esDigito(placa.charAt(7))){
                
            }else{
                mensajeError=mensajeError+"\n| El octavo caracter debe ser un digito ";
            }
        }
    }else{
        mensajeError="| La longitud de la placa debe ser de 7 u 8 caracteres ";
    }
    return mensajeError
    
}

obtenerProvincia=function(placa){
    let letraProv=placa.charAt(0);
    let provincia="";
    if(letraProv=="A"){
        provincia="Azuay";
    }
    if(letraProv=="B"){
        provincia="Bolivar";
    }
    if(letraProv=="U"){
        provincia="Canar";
    }
    if(letraProv=="C"){
        provincia="Carchi";
    }
    if(letraProv=="X"){
        provincia="Cotopaxi";
    }
    if(letraProv=="H"){
        provincia="Chimborazo";
    }
    if(letraProv=="O"){
        provincia="El Oro";
    }
    if(letraProv=="E"){
        provincia="Esmeraldas";
    }
    if(letraProv=="W"){
        provincia="Galapagos";
    }
    if(letraProv=="G"){
        provincia="Guayas";
    }
    if(letraProv=="I"){
        provincia="Imbabura";
    }
    if(letraProv=="L"){
        provincia="Loja";
    }
    if(letraProv=="R"){
        provincia="Los Rios";
    }
    if(letraProv=="M"){
        provincia="Manabi";
    }
    if(letraProv=="V"){
        provincia="Morona Santiago";
    }
    if(letraProv=="N"){
        provincia="Napo";
    }
    if(letraProv=="S"){
        provincia="Pastaza";
    }
    if(letraProv=="P"){
        provincia="Pichincha";
    }
    if(letraProv=="K"){
        provincia="Sucumbios";
    }
    if(letraProv=="Q"){
        provincia="Orellana";
    }
    if(letraProv=="T"){
        provincia="Tungurahua";
    }
    if(letraProv=="Z"){
        provincia="Zamora Chinchipe";
    }
    if(letraProv=="Y"){
        provincia="Santa Elena";
    }

    return provincia;
}

obtenerTipoVehiculo=function(placa){
    let letraTipo=placa.charAt(1);
    let tipo="";
    if(letraTipo=="A" || letraTipo=="Z"){
        tipo="Comercial";
    }else if(letraTipo=="E"){
        tipo="Gubernamental";
    }else if(letraTipo=="X"){
        tipo="Uso Oficial";
    }else if(letraTipo=="S"){
        tipo="Gobierno Provincial";
    }else if(letraTipo=="M"){
        tipo="Municipal";
    }else{
        tipo="Particular"
    }
    return tipo;
}

obtenerDiaPicoYPlaca=function(placa){
    let digitoPyP=placa.charAt(placa.length-1);
    let diaPyP="";
    if(digitoPyP=="1" || digitoPyP=="2"){
        diaPyP="Lunes";
    }
    if(digitoPyP=="3" || digitoPyP=="4"){
        diaPyP="Martes";
    }
    if(digitoPyP=="5" || digitoPyP=="6"){
        diaPyP="Miercoles";
    }
    if(digitoPyP=="7" || digitoPyP=="8"){
        diaPyP="Jueves";
    }
    if(digitoPyP=="9" || digitoPyP=="0"){
        diaPyP="Viernes";
    }
    
    return diaPyP;
}

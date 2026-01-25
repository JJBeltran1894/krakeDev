validarEstructura=function(placa){
    let valido=true;
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
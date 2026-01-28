ejecutarPrueba1=function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

ejecutarPrueba2=function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    invertirCadena(mensaje);
}

recorrerCadena=function(cadena){
    //0123
    //juan
    let caracter;

    for(let posicion=0;posicion<cadena.length;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("Caracter "+caracter+" posicion "+posicion);
    }
    for(let posicion=0;posicion<=cadena.length-1;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("CARACTER "+caracter+" posicion "+posicion);
        
    }
}

invertirCadena=function(cadena){
    let caracter;
    let invertida="";
    for(let posicion=cadena.length;posicion>=0;posicion--){
        caracter=cadena.charAt(posicion);
        console.log("Caracter "+caracter+" posicion "+posicion);
        invertida=invertida+caracter;
    }
    mostrarTexto("lblCadenaInvertida",invertida);
}

buscarLetra=function(cadena,letra){
    let letraIterada;
    let existeLetra=false;
    for(let i=0;i<cadena.length;i++){
        letraIterada=cadena.charAt(i);
        if(letraIterada==letra){
            existeLetra=true;
        }
    }
    if(existeLetra==true){
        console.log("existe");
        return true;
    }else{
        console.log("no existe");
        return false;
    }
}

contarMayusculas=function(){
    let letra;
    let contadorMayusculas;
    for(let i=0;i<cadena.length;i++){
        letra=cadena.charAt(i);
        if(esMayuscula(letra)){
            contadorMayusculas++;
        }
    }
}
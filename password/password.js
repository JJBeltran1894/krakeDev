validarPassword=function(password){
    let errores="";
    let caracteresPass=password.length;
    let caracter;
    let mayusc=false;
    let minusc=false;
    let digito=false;
    let caracEsp=false;
    if(caracteresPass<8 & caracteresPass>16){
        errores="| No cumple longitud requerida - min 8 - max 16 caracteres"
    }
    for(let i=0;i<password.length;i++){
        caracter=password.charAt(i);
        if(esMayuscula(caracter)){
            mayusc=true;
        }
        if(esMinuscula(caracter)){
            minusc=true;
        }
        if(esDigito(caracter)){
            digito=true;
        }
        if(esCaracterEspecial(caracter)){
            caracEsp=true;
        }
    }
    if(mayusc==false){
        errores=errores+" | Debe tener minimo una letra mayuscula";
    }
    if(minusc==false){
        errores=errores+" | Debe tener minimo una letra minuscula";
    }
    if(digito==false){
        errores=errores+" | Debe tener al menos un numero";
    }
    if(caracEsp==false){
        errores=errores+" | Debe tener al menos uno de los siguientes caracteres ( * , - , _ )";
    }
    return errores;
}

ejecutarValidacion=function(){
    let password;
    let mensaje;
    let validacion;
    
    password=recuperarTexto("txtPassword");
    validacion=validarPassword(password);

    if(validacion==""){
        mensaje="Password Correcto";
    }else{
        mensaje=validacion;
    }
    mostrarTexto("lblValidacion",mensaje);
}

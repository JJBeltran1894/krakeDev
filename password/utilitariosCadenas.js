esMayuscula=function(caracter){
    let codigo=caracter.charCodeAt();
    let esMayusc;
    if(codigo>=65 && codigo<=90){
        esMayusc=true;
    }else{
        esMayusc=false;
    }
    return esMayusc;
}

esMinuscula=function(caracter){
    let codigo=caracter.charCodeAt();
    let esMinusc;
    if(codigo>=97 && codigo<=122){
        esMinusc=true;
    }else{
        esMinusc=false;
    }
    return esMinusc;
}

esDigito=function(caracter){
    let codigo=caracter.charCodeAt();
    let esDig;
    if(codigo>=48 && codigo<=57){
        esDig=true;
    }else{
        esDig=false;
    }
    return esDig;
}

esGuion=function(caracter){
    let codigo=caracter.charCodeAt();
    let esGuionm;
    if(codigo==45){
        esGuionm=true;
    }else{
        esGuionm=false;
    }
    return esGuionm;
}

esCaracterEspecial=function(caracter){
    let codigo=caracter.charCodeAt();
    let esCaracEsp;
    if(codigo==45 || codigo==42 || codigo==95){
        esCaracEsp=true;
    }else{
        esCaracEsp=false;
    }
    return esCaracEsp;
}
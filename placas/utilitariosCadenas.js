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
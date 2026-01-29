//Paso 1

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

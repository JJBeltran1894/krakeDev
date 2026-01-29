// Variables Locales
let palabraSecreta;
let intentos=0;
let coincidencias=0;
let errores=0;

//Paso 0

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

//Paso 1

guardarPalabra=function(){
    let palabra=recuperarTexto("txtSecreta");
    let caracteresPalabra=palabra.length;
    let caracter;
    let error;
    
    if(caracteresPalabra==5){
        for(let i=0;i<caracteresPalabra;i++){
            caracter=palabra.charAt(i);
            if(esMayuscula(caracter)){
                error=false;
            }else{
                error=true
                break;
                
            }
        }
    }else{
        error=true;
    }
    if(error==false){
        palabraSecreta=palabra;
        console.log(palabraSecreta);
    }else{
        alert("Ingresar una palabra de 5 letras en mayusculas")
    }
    
}

mostrarLetra=function(letra, posicion){
    mostrarTexto("div"+posicion,letra);
}

validar=function(letra){
    let letrasEncontradas=0;
    let caracter;
    for(i=0;i<5;i++){
        caracter=palabraSecreta.charAt(i);
        if (caracter==letra){
            mostrarLetra(letra,i);
            letrasEncontradas += 1;
        }
    }
    if(letrasEncontradas>0){
        coincidencias += letrasEncontradas;
        console.log("= "+coincidencias);
    }else{
        errores+=1;
        alert("La letra no es parte de la Palabra")
        console.log("X "+errores);
    }
}

ingresarLetra=function(){
    intentos+=1;
    console.log("I "+intentos);
    let letra=recuperarTexto("txtLetra")
    if(esMayuscula(letra)){
        validar(letra);
    }else{
        alert("Solo se aceptan mayusculas");
    }
    if(coincidencias==5){
        alert("Ha Ganado!");
    }else if(intentos==10){
        alert("Ha Perdido!")
    }
}
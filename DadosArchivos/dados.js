jugar=function(){
    let aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio>3){
        //console.log("ES MAYOR A TRES");
        //console.log("GANASTE");
        cambiarTexto("lblResultado","ES MAYOR A TRES");
        cambiarTexto("lblResultado2","GANASTE");
    }else{
        //console.log("ES MENOR A TRES");
        //console.log("PERDISTE");
        cambiarTexto("lblResultado","ES MENOR A TRES");
        cambiarTexto("lblResultado2","PERDISTE");
    }
}

//crear una funcion llamada lanzarDado
//No recibe parametros
//Retorna un numero aleatorio entre 1 y 6

lanzarDado=function(){
    numero=parseInt(Math.random()*6)+1;
    console.log(numero)
    return numero;
}

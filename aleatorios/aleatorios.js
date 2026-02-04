aleatorio=function(){
    let num=parseInt(Math.random()*100)+1;
    console.log(num);
    return num;

}

generarAleatorios=function(){
    let aleatorios=[];
    let numero=recuperarInt("txtNumero");
    let numAleatorio;
    if(numero >=5 & numero<=20){
        for(i=0;i<numero;i++){
            console.log(i);
            numAleatorio=aleatorio();
            aleatorios.push(numAleatorio);
        }
    }else{
        alert("Ingresar un número entre 5 y 20")
    }
     mostrarResultados(aleatorios);
    
}

mostrarResultados=function(arregloNumeros){
    let cmpTabla=document.getElementById("divTabla");
    let contenidoTabla="<table><tr><th>Aleatorios</th><td>";
    let numero=0;
    for(i=0;i<arregloNumeros.length;i++){
        numero=arregloNumeros[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=numero;
        contenidoTabla+="</tr></td>";
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;

}
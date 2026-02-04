let notas =[];

agregarElementos=function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

recorrerArreglo=function(){
    let notaR;
    for(let indice=0;indice<notas.length;indice++){
        notaR=notas[indice];
        console.log(notaR);
    }
}

probarAgregar=function(){
    let nota=recuperarInt("txtNota");
    agregarNota(nota);
    console.log(notas.length);
}

agregarNota=function(nota){
    notas.push(nota);
    mostrarNotas();
}

calcularPromedio=function(){
    let sumatoria=0;
    let numNotas=notas.length;
    let promedio;
    for(let indice=0;indice<numNotas;indice++){
        sumatoria+=notas[indice];
    }
    promedio=sumatoria/numNotas;
    return promedio;
}


ejecutarPromedio=function(){
    let promedio=calcularPromedio();
    mostrarTexto("txtPromedio","Promedio de las notas: "+promedio);
}

generarTabla=function(){
    let contenidoTabla="";
    let cmpTabla=document.getElementById("divTabla");
    contenidoTabla+="<table><tr><td>UNO<td/></tr>"+
    "<tr><td>UNO</td></tr></table>"
    cmpTabla.innerHTML=contenidoTabla;
}

mostrarNotas=function(){
    let cmpTabla=document.getElementById("divTabla");
    let contenidoTabla="<table><tr><th>NOTAS</th><td>";
    let miNota=0;
    for(i=0;i<notas.length;i++){
        miNota=notas[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=miNota;
        contenidoTabla+="</tr></td>";
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;

}
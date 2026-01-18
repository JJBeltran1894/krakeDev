calcularPromedioNotas=function(){
    let nota1=recuperarFlotante("txtNota1");
    let nota2=recuperarFlotante("txtNota2");
    let nota3=recuperarFlotante("txtNota3");
    let promedio=calcularPromedio(nota1,nota2,nota3);
    let promedioMostrar=promedio.toFixed(2);
    cambiarTexto("lblPromedio","El promedio es:"+promedioMostrar);
    if(promedio>7){
        cambiarImagen("imgResultado","exito.gif");
    }else{
        cambiarImagen("imgResultado","fracaso.gif");
    }

}
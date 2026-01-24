calcularPromedioNotas=function(){
    let nota1=recuperarFlotante("txtNota1");
    let nota2=recuperarFlotante("txtNota2");
    let nota3=recuperarFlotante("txtNota3");
    let promedio=calcularPromedio(nota1,nota2,nota3);
    let promedioMostrar=promedio.toFixed(2);
    cambiarTexto("lblPromedio","El promedio es:"+promedioMostrar);

    if(promedio<5 && promedio>0){
        cambiarImagen("imgResultado","reprobado.gif");
        cambiarTexto("lblResultado","REPROBADO");
    }else if(promedio>=5 && promedio<=8){
        cambiarImagen("imgResultado","buenTrabajo.gif");
        cambiarTexto("lblResultado","BUEN TRABAJO!");
    }else if(promedio>8 && promedio<=10){
        cambiarImagen("imgResultado","excelente.gif");
        cambiarTexto("lblResultado","EXCELENTE!");
    }else{
        cambiarImagen("imgResultado","incorrecto.gif");
        cambiarTexto("lblResultado","DATOS INCORRECTOS");
    }


    //if(promedio>7){
    //    cambiarImagen("imgResultado","exito.gif");
    //}else{
    //    cambiarImagen("imgResultado","fracaso.gif");
    //}

}
calcularTasaInteres=function(ingresoAnual){
    let tasa;
    if(ingresoAnual<300000){
        tasa=16;
    }else if(ingresoAnual>=300000 && ingresoAnual<500000){
        tasa=15;
    }else if(ingresoAnual>=500000 && ingresoAnual<1000000){
        tasa=14;
    }else if(ingresoAnual>=1000000 && ingresoAnual<2000000){
        tasa=13;
    }else if(ingresoAnual>=2000000){
        tasa=12;
    }
    return tasa;
}

calcularCapacidadPago=function(edad,ingresos,egresos){
    let cuota;
    if(edad>50){
        cuota=(ingresos-egresos)*0.3;
    }else if(edad<=50){
        cuota=(ingresos-egresos)*0.4;
    }
    return cuota;
}

calcularDescuento=function(precio,cantidad){
    let descuento;
    if(cantidad<3){
        descuento=0;
    }else if(cantidad>=3 && cantidad<=5){
        descuento=0.02;
    }else if(cantidad>5 && cantidad<=11){
        descuento=0.03;
    }else if(cantidad>11){
        descuento=0.04;
    }
    subtotal=(precio*cantidad);
    aPagar=subtotal-(subtotal*descuento);
    return aPagar;
}

determinarColesterolLDL=function(nivelColesterol){
    let resultado;
    if(nivelColesterol<100){
        resultado="Optimo - Nivel ideal para la mayoría de las personas.";
    }else if(nivelColesterol>=100 && nivelColesterol<130){
        resultado="Casi Optimo - Está bien para personas sin problemas de salud, pero puede ser preocupación si tienes factores de riesgo.";
    }else if(nivelColesterol>=130 && nivelColesterol<160){
        resultado="Limite Alto - Se empieza a considerar elevado.";
    }else if(nivelColesterol>=160 && nivelColesterol<190){
        resultado="Alto - Nivel peligroso que requiere atención.";
    }else if(nivelColesterol>=190){
        resultado="Alto - Nivel peligroso que requiere atención.";
    } 
    return resultado;   
}

validarClave=function(clave){
    let valida;
    let numCaracteres=clave.length;
    if(numCaracteres>=8 && numCaracteres<=16){
        valida=true;
    }else{
        valida=false;
    }
    return valida;
}

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
    let esMiusc;
    if(codigo>=97 && codigo<=122){
        esMiusc=true;
    }else{
        esMiusc=false;
    }
    return esMiusc;
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

darPermiso=function(notaMatematica,notaFisica,notaGeometria){
    let permiso;
    if(notaMatematica>90 || notaFisica>90 || notaGeometria >90){
        permiso=true;
    }else{
        permiso=false;
    }
    return permiso;
}

otorgarPermiso=function(notaMatematica,notaFisica,notaGeometria){
    let permiso;
    if(notaMatematica>90 || notaFisica>90  && notaGeometria >80){
        permiso=true;
    }else{
        permiso=false;
    }
    return permiso;
}

dejarSalir=function(notaMatematica,notaFisica,notaGeometria){
    let permiso;
    if(notaMatematica>90 || notaFisica>90 || notaGeometria >90 && notaFisica>notaMatematica){
        permiso=true;
    }else{
        permiso=false;
    }
    return permiso;
}


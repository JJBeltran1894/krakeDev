calcularValorDescuento=function(monto,porcentajeDescuento){
    let valorDescuento=(monto*porcentajeDescuento)/100;
    return valorDescuento;
}

calcularIVA=function(monto){
    let iva=monto*0.15;
    return iva;
}

calcularSubtotal=function(precio,cantidad){
    let subtotal=precio*cantidad;
    return subtotal;
}

calcularTotal=function(subtotal,descuento,iva){
    let total=subtotal-descuento+iva;
    return total;
}

calcularDescuentoPorVolumen=function(subtotal,cantidad){
    let descuento;
    let valorDescuento;
    if(cantidad<3){
        descuento=0;
    }else if(cantidad>=3 && cantidad<=5){
        descuento=0.03;
    }else if(cantidad>5 && cantidad<12){
        descuento=0.04;
    }else if(cantidad>=12){
        descuento=0.05;
    }
    valorDescuento=subtotal*descuento;
    return valorDescuento;
}
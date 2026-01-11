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

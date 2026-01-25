calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
    let porcentajeDescuento;

    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let baseImponible;
    let valorTotal;

    //otras varibles locales
    let resumen;

    //1. Recuperar el nombre del producto como String
    nombreProducto = recuperarTexto("txtProducto");
    //2. Recuperar el precio como float
    precioProducto = recuperarFloat("txtPrecio");
    //3. Recuperar cantidad como int
    cantidad = recuperarInt("txtCantidad");

    if (esProductoValido(nombreProducto, "lblErrorProducto") & esCantidadValida(cantidad, "lblErrorCantidad") & esPrecioValido(precioProducto, "lblErrorPrecio")) {
        valorSubtotal = calcularSubtotal(precioProducto, cantidad);
        mostrarTexto("lblSubtotal", valorSubtotal);
        valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad)
        mostrarTexto("lblDescuento", valorDescuento);
        baseImponible = valorSubtotal - valorDescuento;
        valorIVA = calcularIVA(baseImponible);
        mostrarTexto("lblValorIVA", valorIVA);
        valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
        mostrarTexto("lblTotal", valorTotal);
    }



    //resumen="Valor a pagar por "+cantidad+" "+nombreProducto+" con "+porcentajeDescuento+"% de descuento: USD "+valorTotal;
    //mostrarTexto("lblResumen",resumen);
}
limpiar = function () {

    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtCantidad", "0");
    mostrarTextoEnCaja("txtPrecio", "0.0");
    mostrarTextoEnCaja("txtPorcentajeDescuento", "0");
    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
    mostrarTexto("lblTotal", "0.0");
    //mostrarTexto("lblResumen","");   
}

esProductoValido = function (producto, componenteError) {
    let valido = true;
    if (producto==""){
        mostrarTexto(componenteError, "* Campo Obligatorio");
        valido = false;
    }else if (producto.length > 10) {
        mostrarTexto(componenteError, "El nombre del producto no debe tener mas de 10 caracteres");
        valido = false;
    }else{
        mostrarTexto(componenteError,"");
    }
    return valido;
}

esCantidadValida = function (cantidad, componenteError) {
    let valido = true;
    let nan=isNaN(cantidad);
    if (cantidad==""){
        mostrarTexto(componenteError, "* Campo Obligatorio");
        valido = false;
    }else if(nan){
        mostrarTexto(componenteError, "Ingrese una cantidad entre 0 y 100");
        valido = false;
    }else if (cantidad < 0 || cantidad > 100) {
        mostrarTexto(componenteError, "Ingrese una cantidad entre 0 y 100");
        valido = false;
    }else{
        mostrarTexto(componenteError,"");
    }
    return valido;
}

esPrecioValido = function (precio, componenteError) {
    let valido = true;
    let nan=isNaN(precio);
    if (precio==""){
        mostrarTexto(componenteError, "* Campo Obligatorio");
        valido = false;
    }else if(nan){
        mostrarTexto(componenteError, "Ingrese un precio entre 0 y 50");
        valido = false;
    }else if (precio < 0 || precio > 50) {
        mostrarTexto(componenteError, "Ingrese un precio entre 0 y 50");
        valido = false;
    }else{
        mostrarTexto(componenteError,"");
    }
    return valido;
}
probarAtributos=function(){
    let persona={
        nombre: "Pedro",
        apellido: "Morales",
        edad: 24,
        estaVivo: true
    }

    console.log(persona.nombre);
    console.log(persona.edad);

    if(persona.estaVivo==false){
        console.log("no esta vivo");
    }else{
        console.log("si esta vivo");
    }
}

crearProducto=function(){
    let producto1={
        nombre: "Disco SSD M.2 ADATA 1TB",
        precio: 70.50,
        stock: 213
    }
    let producto2={
        nombre: "Disco SSD M.2 KINGSTON 1TB",
        precio: 85.45,
        stock: 176
    }

    console.log(producto1.nombre);
    console.log(producto2.nombre);

    if(producto1.stock>producto2.stock){
        console.log("Producto 1 tiene mayor stock");
    }else if(producto2.stock>producto1.stock){
        console.log("Producto 2 tiene mayor stock");
    }else if(producto1.stock==producto2.stock){
        console.log("Ambos productos tienen el mismo stock");
    }
    
}
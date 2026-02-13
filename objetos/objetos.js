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

modificarAtributos=function(){
    let cuenta={
        numero: "5323423423",
        saldo: 0.0
    }
    cuenta.saldo=100;
    cuenta.saldo+=10;
    console.log(cuenta.saldo);

}

crearCliente=function(){
    let cliente={
        cedula:"1728503519",
        nombre: "Juan José",
    }
    let cliente1={};
    cliente1.nombre="Luis";
    cliente1.apellido="Romero";
    cliente1.cedula="1713321415";
    console.log(cliente.nombre);
}

probarIncrementoSaldo=function(){
    let cta={numero:"23424",saldo:34.0}
    incrementarSaldo(cta,100);
}

probarDeterminarMayor=function(){
    let per1={nombre:"Daniel",edad:45};
    let per2={nombre:"Luisa",edad:48};
    let mayor=determinarMayor(per1,per2);
    if(mayor !=null){
        console.log("El mayor es: "+mayor.nombre);
    }
}

incrementarSaldo=function(cuenta,monto){
    cuenta.saldo+=monto;
}

determinarMayor=function(persona1,persona2){
    if(persona1.edad>persona2.edad){
        return persona1;
    }else if(persona2.edad>persona1.edad){
        return persona2;
    }else{
        return null;
    }
    
}
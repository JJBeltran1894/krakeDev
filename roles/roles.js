let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"0514731720",nombre:"Damian",apellido:"Aguilar",sueldo:750.0}
]

let esNuevo=false;

mostrarOpcionEmpleado=function(){
    mostrarEmpleados();
    deshabilitarNuevoForm();
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
}

mostrarOpcionRol=function(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen=function(){
    mostrarComponente("divResumen");
    ocultarComponente("divRol");
    ocultarComponente("divEmpleado");
    
}

deshabilitarNuevoForm=function(){
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
    habilitarComponente("btnNuevo");
}

mostrarEmpleados=function(){
    let cmpTabla=document.getElementById("tablaEmpleados");
    let contenidoTabla="<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>APELLIDO</th>"+
    "<th>SUELDO</th>"+
    "</tr>";
    let elementoEmpleado;
    for(let i=0;i<empleados.length;i++){
        elementoEmpleado=empleados[i];
        contenidoTabla+=
        "<tr><td>"+elementoEmpleado.cedula+"</td>"
        +"<td>"+elementoEmpleado.nombre+"</td>"
        +"<td>"+elementoEmpleado.apellido+"</td>"
        +"<td>"+elementoEmpleado.sueldo+"</td>"
        +"</tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}

ejecutarNuevo=function(){
    esNuevo=true;
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    deshabilitarComponente("btnNuevo");

}

buscarEmpleado=function(cedula){
    let empleado=null;

    for(i=0;i<empleados.length;i++){
        elementoEmpleados=empleados[i];
        if(elementoEmpleados.cedula==cedula){
            empleado=elementoEmpleados;
            break;
        }
    }
    return empleado;
}

agregarEmpleado=function(empleado){
    let resultado=buscarEmpleado(empleado.cedula);
    if(resultado==null){
        empleados.push(empleado);
        alert("Se ha creado el empleado "+empleado.nombre+" "+empleado.apellido);
        mostrarEmpleados();
    }else{
        alert("Ya existe el empleado con CI: "+empleado.cedula);
    }

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

guardar=function(){
    let error=false;
    let cedula=recuperarTexto("txtCedula");
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
    let sueldo=recuperarTexto("txtSueldo");

    if(cedula.length!=10){
        mostrarTexto("lblErrorCedula","El numero de cedula debe tener 10 digitos");
        error=true;
    }else{
        mostrarTexto("lblErrorCedula","");
        for(i=0;i<cedula.length;i++){
            if(esDigito(cedula.charAt(i))==false){
                mostrarTexto("lblErrorCedula","Ingrese solo caracteres numericos");
                error=true;
            }
        }
    }

    if(nombre.length<3){
        mostrarTexto("lblErrorNombre","El nombre debe tener al menos 3 caracteres");
        error=true;
    }else{
        mostrarTexto("lblErrorNombre","");
        for(i=0;i<nombre.length;i++){
            if(esMayuscula(nombre.charAt(i))==false){
                mostrarTexto("lblErrorNombre","Ingrese solo caracteres en mayusculas");
                error=true;
            }
        }
    }

    if(apellido.length<3){
        mostrarTexto("lblErrorApellido","El apellido debe tener al menos 3 caracteres");
        error=true;
    }else{
        mostrarTexto("lblErrorApellido","");
        for(i=0;i<apellido.length;i++){
            if(esMayuscula(apellido.charAt(i))==false){
                mostrarTexto("lblErrorApellido","Ingrese solo caracteres en mayusculas");
                error=true;
            }
        }
    }
    if(isNaN(sueldo)){
        mostrarTexto("lblErrorSueldo","Ingrese un numero");
        error=true;
    }else if(sueldo<400 || sueldo>5000){
        
        mostrarTexto("lblErrorSueldo","Ingrese un valor entre 400 y 5000");
        error=true;
        error=true;
    }else{
        mostrarTexto("lblErrorSueldo","");
        if(error==false){
            if(esNuevo==true){
                let empleado=[];
                empleado.cedula=cedula;
                empleado.nombre=nombre;
                empleado.apellido=apellido;
                empleado.sueldo=sueldo;
                agregarEmpleado(empleado);
                esNuevo=false;
            }else{
                empleadoModificar=buscarEmpleado(cedula);
                empleadoModificar.nombre=nombre;
                empleadoModificar.apellido=apellido;
                empleadoModificar.sueldo=sueldo;
                alert("Empleado modificado exitosamente");
                mostrarEmpleados();
            }

        }
            deshabilitarNuevoForm();
            
    }
}

ejecutarBusqueda=function(){
    let cedula=recuperarTexto("txtBusquedaCedula");
    empleado=buscarEmpleado(cedula);
    if(empleado==null){
        alert("El empleado no existe");
    }else{
        mostrarTextoEnCaja("txtCedula",empleado.cedula);
        mostrarTextoEnCaja("txtNombre",empleado.nombre);
        mostrarTextoEnCaja("txtApellido",empleado.apellido);
        mostrarTextoEnCaja("txtSueldo",empleado.sueldo);
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        habilitarComponente("btnGuardar");
    }


}

limpiar=function(){
    esNuevo=false;
    mostrarTexto
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
    mostrarTexto("txtCedula","");
    mostrarTexto("txtNombre","");
    mostrarTexto("txtApellido","");
    mostrarTexto("txtSueldo","");
    
}
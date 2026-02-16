let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"0514731720",nombre:"Damian",apellido:"Aguilar",sueldo:750.0}
]

let roles=[];

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
    deshabilitarComponente("btnGuardarRol");
    
}

mostrarOpcionResumen=function(){
    mostrarComponente("divResumen");
    ocultarComponente("divRol");
    ocultarComponente("divEmpleado");
    mostrarRoles();
    
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

buscarPorRol=function(){
    
    let cedula=recuperarTexto("txtBusquedaCedulaRol");
    let empleado=buscarEmpleado(cedula);
    if(empleado==null){
        alert("El empleado no existe");
    }else{
        mostrarTexto("infoCedula",empleado.cedula);
        mostrarTexto("infoNombre",empleado.nombre+" "+empleado.apellido);
        mostrarTexto("infoSueldo",empleado.sueldo);
    
    }
}

calcularAporteEmpleado=function(sueldo){
    let aportePersonal=sueldo*0.0945;
    return aportePersonal;
}

calcularValorAPagar=function(sueldo,aporteIESS,descuento){
    let aPagar=sueldo-aporteIESS-descuento;
    return aPagar;
}

calcularRol=function(){
    sueldo=recuperarFloatDiv("infoSueldo");
    descuentos=recuperarFloat("txtDescuentos");
    aportePersonal=calcularAporteEmpleado(sueldo);
    aPagar=calcularValorAPagar(sueldo,aportePersonal,descuentos);
    mostrarTexto("infoIESS",aportePersonal);
    mostrarTexto("infoPago",aPagar);
    habilitarComponente("btnGuardarRol");
}

buscarRol=function(cedula){
    let rol=null;

    for(i=0;i<roles.length;i++){
        elementoRol=roles[i];
        if(elementoRol.cedula==cedula){
            rol=elementoRol;
            break;
        }
    }
    return rol;
}

agregarRol=function(rol){
    let resultado=buscarRol(rol.cedula);
    if(resultado==null){
        roles.push(rol);
        alert("Se ha creado el rol de pagos de "+rol.nombre);
    }else{
        alert("Ya existe el rol de pagos del empleado con CI: "+rol.cedula);
    }
}

calculaAporteEmpleador=function(sueldo){
    let aportePatronal=sueldo*0.1115;
    return aportePatronal;
}

guardarRol=function(){
    aporteEmpleado=recuperarFloatDiv("infoIESS");
    aPagar=recuperarFloatDiv("infoPago");
    cedula=recuperarTextoDiv("infoCedula");
    nombre=recuperarTextoDiv("infoNombre");
    sueldo=recuperarFloatDiv("infoSueldo");
    let rol=[];
    rol.cedula=cedula;
    rol.nombre=nombre;
    rol.sueldo=sueldo;
    rol.valorAPagar=aPagar;
    rol.aporteEmpleado=aporteEmpleado;
    let aporteEmpleador=calculaAporteEmpleador(sueldo);
    rol.aporteEmpleador=aporteEmpleador;
    agregarRol(rol);
    mostrarTexto("infoCedula","");
    mostrarTexto("infoNombre","");
    mostrarTexto("infoSueldo","0.00");
    mostrarTextoEnCaja("txtDescuentos","0.00");
    mostrarTexto("infoIESS","0.00");
    mostrarTexto("infoPago","0.00");
    
}

mostrarRoles=function(){
    let cmpTabla=document.getElementById("tablaResumen");
    let contenidoTabla="<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>VALOR A PAGAR</th>"+
    "<th>APORTE EMPLEADO</th>"+
    "<th>APORTE EMPLEADOR</th>"+
    "</tr>";
    let elementoRol;
    for(let i=0;i<roles.length;i++){
        elementoRol=roles[i];
        contenidoTabla+=
        "<tr><td>"+elementoRol.cedula+"</td>"
        +"<td>"+elementoRol.nombre+"</td>"
        +"<td>"+elementoRol.valorAPagar+"</td>"
        +"<td>"+elementoRol.aporteEmpleado+"</td>"
        +"<td>"+elementoRol.aporteEmpleador+"</td>"
        +"</tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
    mostrarTotales();
}

mostrarTotales=function(){
    let totalEmpleado=0;
    let totalEmpleador=0;
    let totalAPagar=0;
    let rol=[];

    for(i=0;i<roles.length;i++){
        rol=roles[i];
        totalEmpleado+=rol.aporteEmpleado;
        totalEmpleador+=rol.aporteEmpleador;
        totalAPagar+=rol.valorAPagar;
    }
    let totalNomina=totalEmpleado+totalEmpleador+totalAPagar;

    mostrarTexto("infoTotalPago",totalAPagar);
    mostrarTexto("infoAporteEmpresa",totalEmpleador);
    mostrarTexto("infoAporteEmpleado",aporteEmpleado);
    mostrarTexto("infoTotalNomina",totalNomina);

}
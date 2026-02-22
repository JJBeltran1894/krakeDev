let estudiantes = [];

procesarEstudiante=function(){
    let errorNombre=false;
    let errorCorreo=false;
    let errorId=false;
    let nombre=recuperarTexto("txtNombreCompleto");
    let correo=recuperarTexto("txtCorreo");
    let id=recuperarTexto("txtId");
    let estudiante;

    errorNombre=validarNombre(nombre);
    errorCorreo=validarCorreo(correo);
    errorId=validarId(id,"lblErrorId");

    if(errorNombre || errorCorreo || errorId){
        
    }else{
        mostrarTexto("txtNombreCompleto","");
        mostrarTexto("txtCorreo","");
        mostrarTexto("txtId","");
        if((estudiante=buscarEstudiante(id))!=null){
            estudiante.nombre=nombre;
            estudiante.correo=correo;
            alert("Estudiante modificado correctamente");
        }else{
            let nuevoEstudiante=[];
            nuevoEstudiante.nombre=nombre;
            nuevoEstudiante.correo=correo;
            nuevoEstudiante.id=id;
            estudiantes.push(nuevoEstudiante);
            alert("Estudiante agregado correctamente");
        }
        limpiar();
        mostrarEstudiantes();
    }
}

validarNombre=function(nombre){
    let error=false;
    if(nombre.length==0){
        mostrarTexto("lblErrorNombre","El nombre no puede estar vacio");
        error=true;
    }else{
        
        mostrarTexto("lblErrorNombre","");
        let char;
        for(i=0;i<nombre.length;i++){
            char=nombre.charAt(i)
            if((esMayuscula(char)) || (esMinuscula(char)) || char.charCodeAt()==32){ 
                
            }else{
                error=true;
                mostrarTexto("lblErrorNombre","Ingresar solo letras y espacios");
                break;

            }
        }
    }
    if(error==false){
        partesNombre=nombre.split(" ");
        for(i=0;i<partesNombre.length;i++){
            char=partesNombre[i].charAt(0);
            if(esMayuscula(char)){
               
            }else{
                error=true;
                mostrarTexto("lblErrorNombre","La letra inicial de cada palabra debe ser mayuscula");
                break;
            }
        }
    }
    return error;
}

validarCorreo=function(correo){
    let error=false;
    if(correo.length==0){
        mostrarTexto("lblErrorCorreo","El correo no puede estar vacio");
        error=true;
    }else{
        mostrarTexto("lblErrorCorreo","");
        emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (emailRegex.test(correo)){

        }else{
            error=true;
            mostrarTexto("lblErrorCorreo","Ingrese correo valido");
        }
    } 
    return error;
}

validarId=function(id,idComponente){
    let error=false;
    if(id.length==0){
        mostrarTexto(idComponente,"El ID no puede estar vacio");
        error=true;
    }else{
        mostrarTexto(idComponente,"");
        for(i=0;i<id.length;i++){
            if(esDigito(id.charAt(i))){

            }
            else{
                mostrarTexto(idComponente,"Ingrese solo digitos en el ID");
                error=true;
                break;
            }
        }
    }
    return error;
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
esMinuscula=function(caracter){
    let codigo=caracter.charCodeAt();
    let esMinusc;
    if(codigo>=97 && codigo<=122){
        esMinusc=true;
    }else{
        esMinusc=false;
    }
    return esMinusc;
}

limpiar=function(){
    mostrarTextoEnCaja("txtNombreCompleto","");
    mostrarTextoEnCaja("txtCorreo","");
    mostrarTextoEnCaja("txtId","");
}

buscarEstudiante=function(id){
    let estudiante=null;
    let elementoEstudiante;
    for(i=0;i<estudiantes.length;i++){
        elementoEstudiante=estudiantes[i];
        if(elementoEstudiante.id==id){
            estudiante=elementoEstudiante;
            break;
        }
    }
    return estudiante;
}


mostrarEstudiantes=function(){
    let cmpTabla=document.getElementById("tablaEstudiantes");
    let contenidoTabla="<table><tr>"+
    "<th>ID</th>"+
    "<th>NOMBRE</th>"+
    "<th>CORREO</th>"+
    "</tr>";
    let elementoEstudiante;
    for(let i=0;i<estudiantes.length;i++){
        elementoEstudiante=estudiantes[i];
        contenidoTabla+=
        "<tr><td>"+elementoEstudiante.id+"</td>"
        +"<td>"+elementoEstudiante.nombre+"</td>"
        +"<td>"+elementoEstudiante.correo+"</td>"
        +"</tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}

eliminarEstudiante=function(){
    let id=recuperarTexto("txtIdEliminar");
    let errorId=validarId(id,"lblIdEliminar");
    if(errorId==false){
        for (i=0;i<estudiantes.length;i++){
            elementoEstudiante=estudiantes[i];
            if(elementoEstudiante.id==id){
                estudiantes.splice(i,1);
                mostrarEstudiantes();
                alert("Estudiante eliminado correctamente");
                mostrarTextoEnCaja("txtIdEliminar","");
            }else{
                alert("No se encontro estudiante con la ID ingresada")
            }
        }
    }
}





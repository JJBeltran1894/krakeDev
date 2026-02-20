let personas = [
    {nombre:"Marcos",edad:18},
    {nombre:"Roberto",edad:15},
    {nombre:"Kate",edad:25},
    {nombre:"Diana",edad:12},
    {nombre:"Benja",edad:5},
    
]

agregarPersona=function(){
    let error=false;
    let nombre=recuperarTexto("txtNombre");
    let edad=recuperarTexto("txtEdad");

    if(nombre.length<3){
        mostrarTexto("lblErrorNombre","El nombre debe tener al menos 3 caracteres");
        error=true;
    }

    if(isNaN(edad)){
        mostrarTexto("lblErrorEdad","Ingrese un numero");
        error=true;
    }else if(edad<0 || edad>100){
        mostrarTexto("lblErrorEdad","Ingrese un valor entre 0 y 100");
        error=true;
    }else{
        mostrarTexto("lblErrorEdad","");
        if(error==false){
            let nuevaPersona=[];
            nuevaPersona.nombre=nombre;
            nuevaPersona.edad=edad;
            personas.push(nuevaPersona);
            alert("Persona agregada correctamente");
            mostrarPersonas();
        }
    }
}

mostrarPersonas=function(){
    let cmpTabla=document.getElementById("tablaPersonas");
    let contenidoTabla="<table><tr>"+
    "<th>EDAD</th>"+
    "<th>NOMBRE</th>"+
    "</tr>";
    let elementoPersona;
    for(let i=0;i<personas.length;i++){
        elementoPersona=personas[i];
        contenidoTabla+=
        "<tr><td>"+elementoPersona.edad+"</td>"
        +"<td>"+elementoPersona.nombre+"</td>"
        +"</tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}

encontrarMayor=function(){
    let personaMayor=personas[0];
    let elementoPersona=[];

    for(i=1;i<personas.length;i++){
        elementoPersona=personas[i];
        console.log(elementoPersona.nombre+" edad: "+elementoPersona.edad);
        if(elementoPersona.edad>personaMayor.edad){
            personaMayor=elementoPersona;
        }
    }
    return personaMayor;
}

determinarMayor=function(){
    let mayor=encontrarMayor();
    mostrarTexto("resultado","La persona mayor es: "+mayor.nombre+" edad "+mayor.edad);
}
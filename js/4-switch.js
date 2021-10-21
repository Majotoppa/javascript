let estacion = prompt ("ingrese su estacion del año preferida: 1-verano, 2-otoño, 3-invierno, 4- primavera");
 /** 
if(estacion == "1"){
    document.write("Sandia");
}else if (estacion == "2"){
    document.write("churros");   
}else if (estacion == "3"){
    document.write("guiso");
}else if (estacion == "4"){
    document.write("cerveza");
}else{
    alert("ingreso una opcion erronea")
}
 */

/* switch(opcion) {
    case "1":
        todas las lineas de codigo que quiero ejecutar si elige la opcion 1
        break;
    case "2":
        todas las lineas de codigo que quiero ejecutar si elige la opcion 1
        break;
    case "3":
        todas las lineas de codigo que quiero ejecutar si elige la opcion 1
        break;
    default:
        todas las lineas de codigo cuando no son los casos anteriores
}
*/

switch(estacion){
    case"1":
    document.write("sandia");
    break;
    case"2":
    document.write("churros");
    break;
    case"3":
    document.write("guiso");
    break;
    case"4":
    document.write("cerveza");
    break;
    default:
        alert("opcion erronea")
    
}

console.log(confirm("¿desea continuar?") )

/*
do {

}while (confirm(desea continuar?))

*/ 
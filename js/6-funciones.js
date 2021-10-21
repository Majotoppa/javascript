//funciones sin parametro
// 1- palabra reservada 2 nombre de la funcion que reprensente lo que hace
function saludar(){
    //todo el codigo que quiero que tenga la funcion
    document.write("hola mundo");
}

//funciones con parametros
//algo que quiero resivir desde el exterior
function saludo(nombre,apellido){
    document.write("<br> hola mi nombre es: " +nombre + "y mi apellido es " +apellido);
}

//funciones que retornan un valor
function convertirDolaresAPesos(dolares){
   let pesosFinales = dolares * 185;
   console.log(pesosFinales);
   //el retur es la ultima linea de codigos de una funcion 
   return pesosFinales;
}

//funciones en forma de flecha =>
let convertirDolaresAPesos = (dolares) =>{
    let pesosFinales = dolares * 185;
    console.log(pesosFinales);
    //el retur es la ultima linea de codigos de una funcion 
    return pesosFinales;
}

//invocar o llamar una funcion
//nombre de la funciion que nosotros establecimos
saludar();


let nombreSolicitado = prompt("ingrese un nombre");
let apellidoSolicitado = prompt("ingrese un apellido");

saludo(nombreSolicitado, apellidoSolicitado);
saludo("alejandro, mercado");

let pesos = convertirDolaresAPesos(1000);

document.write("<br>Producto: Iphone x" +pesos);
document.write("<br> Producto : xiaomi note 9 pro, $" + convertirDolaresAPesos(300));
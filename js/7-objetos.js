/*
let email = "jonyplo@gmail.com"; 
let nombre = "jony plodzien";
let domicilio = "direccion de jony";
let localidad = "4000";
let password = "A123&458"
*/
//crear un objeto con notacion literal
let usuarioJony = {
    //propiedades-> clave:valor
    email: "jonyplo@gmail.com",
    nombre: "jony",
    domicilio: "direccion de jony",
    localidad:  "4000",
    password:  "A123&458",
    estado: true,
    //metodos o funciones
}

//mostrar un objeto
console.log(usuarioJony);

//mostear el objeto primera forma
document.write("Email: "+ usuarioJony.email );

//mostrar el objeto segunda forma
document.write("<br>Nombre: "+ usuarioJony["nombre"]);

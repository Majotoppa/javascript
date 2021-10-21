// crear una clase 
//nombre,apellido,email,edad,direccion,fotoPerfil,dni
class Persona{
    //primer metodo a crear y su mision es crear el objeto
    constructor( paramNombre, apellido , email, edad, direccion, fotoPerfil, dni){
        this.fotoPerfil = fotoPerfil;
        this.nombre = paramNombre;
        this.apellido = apellido;
        this.email = email;
        this.edad = edad;
        this.direccion = direccion;
        this.dni = dni;
        this.estado = true; //este estado diria que la persona esta habilitada -- parametro por defecto
        
    }

    //agregar los metodos
    mostrarDatos(){
       // document.write("<br>Nombre: " + this.nombre + "<br>Apellido:" + this.apellido)
       document.write(`<br>Nombre: ${this.nombre}
       <br>Apellido: ${this.apellido}
       <br>Email: ${this.email}
       <br>Edad: ${this.edad}
       <br>Direccion: ${this.direccion}
       <br>DNi: ${this.dni} `) 
    }

    
}


//como crear un objeto, crear instanciar 
 let luciana = new Persona("luciana", "Medina", "luciana@gmail.com", 25, "las rosas", "url", 38115930);
 console.log(luciana);

 let axel = new Persona ("axel", "campo", "axel@gmail.com",26,"pasaje santa cruz", "url",39568752);

 //usar los metodos de la clase persona

 luciana.mostrarDatos();
 axel.mostrarDatos();
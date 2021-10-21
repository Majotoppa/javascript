let frase = prompt("ingrese una frase")

console.log(frase);   
console.log(frase.length);  //cuenta cuantos caracteres que tiene una cadena de texto

console.log(frase.charAt (1) ) //charat extrae caracteres
console.log(frase.toUpperCase) // transformo a mayuscula
console.log(frase.toLowerCase) //transformo a minuscula

frase = frase.toLowerCase()  //aca pase toda la frase a minuscula

// recorrer la frase con un bucle , el fin de mi bucle frase.length 

// if preguntar si cada caracter es una vocal o no frase.charAt(x) =="a || frase.charAt(x) == "e"

//mostar un document.whire (frase.charAt (x))


for(let i=0; i < frase.length; i = i + 1) {
    if(frase.charAt(i) == "a" || (frase.charAt(i)) == "e" || (frase.charAt(i)) == "i" || (frase.charAt(i)) == "o" || (frase.charAt(i)) == "u" ) {
    document.write(frase.charAt(1)) 
    }
}
/* document.write("elemento 1 <br>");
document.write("elemento 2 <br>");
document.write("elemento 3 <br>");
document.write("elemento 4 <br>");
document.write("elemento 5 <br>");
document.write("elemento 6 <br>");
*/
// while 
/* while(condicion logica){
    todas las lineas de codigo que quiero que se repitan
    cambiar la condicion logica
}

*/ 
/* 
let contador = 1;

while(contador <=50){
    document.write("elemento " + contador + "<br>"  );
    contador++;  //contador = contador + 1;
    
}

*/

//do-while   ((hacer alguna tarea mientras se cumpla la condicion logica))

/*
 do{
     todas las lineas de codigo a ejecutar
     cambiar la condicion
 } while (codicion logica)
*/
  /* 
let cont = 20;
do{
    document.write("elemento " + cont + "<br>"  );
    cont--; // cont = cont -1
}while(cont >=1)
*/

//for  funciona igual a un while

/* for (inicializamos una variable; condicion logica; incrementar o decrementar el contenido de la variable ){ 
    ... }

 */

for(let indice =1; indice<= 100; indice= indice + 1){
    document.write("elemento " + indice + "<br>"  );
};
//1. Algoritmo que imprime los 50 primeros números pares.
let cincuenta_num_par = function(){
    for(let i = 2; i <= 50; i = i + 2){
    console.log(`numero : ${i}`);
    }
  }
 // cincuenta_num_par()

 //2. Algoritmo que imprima los múltiplos de 5 entre los números 0 y 100.

 let multiplos_5 = function(){
    for(let i = 0; i <= 100; i = i + 1){
    console.log(`numero : ${i*5}`);
    }
  }
 // multiplos_5()

 //3. Algoritmo para calcular la multiplicación de 2 números sin usar el operador ( * asterisco).

 let multiplicacion = function(num1,num2){
    let acum = 0;
    let i;
    for(i=0; i < num2; i++){
    acum += num1;
    }
  }
  multiplicacion()
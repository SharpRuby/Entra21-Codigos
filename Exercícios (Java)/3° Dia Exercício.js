for (let num = 1; num <= 50; num++) {
    console.log(num);
}

//
console.log("");
//

for (let i = 0; i <= 40; i += 2) {
    console.log(i);
}

//
console.log("");
//

let numero = 1; 
while (numero < 50) {
    console.log("Número: " + numero);
    numero++; 
}

//
console.log("");
//

for (let a = 1; a <= 10; a ++) {
    console.log(a + "° Hello World");
}

//
console.log("");
//

var tentativas = 0; 
var number = 20; 

while (tentativas < 3) {
    if (number >= 12 && number <= 20) {
        console.log("Você digitou o número: " + number);
        break; 
    } else {
        console.log("Entrada Inválida. Tente novamente.");
        tentativas++; 
    }
}

if (tentativas === 3) {
    console.log("Número de tentativas excedidas.");
}

//
console.log("");
//

let contador_ = 1;
do {
  console.log("Número:", contador_);
  contador_++;
} while (contador_ <= 10);

//
console.log();
//

vetor = [100, 200, 300, 400, 500, 600]
console.log("Primeiro: " + vetor[0]);
console.log("Segundo: " + vetor[1]);
console.log("Terceiro: " + vetor[2]);
console.log("Quarto: " + vetor[3]);
console.log("Quinto: " + vetor[4]);
console.log("Sexto: " + vetor[5]);

//
console.log();
//

numeros = [1, 2, 3, 4, 5, 6]; 

// Revisão

// 1. Crie uma variável para armazenar o nome e exiba no console o nome da pessoa com uma mensagem de olá.  
let nome = "Pablo."
console.log("Olá " + nome);
console.log("");

// 2. Crie um programa que peça a renda total da família e defina em qual classe social ele faz parte: Classe A: (renda mensal domiciliar superior a R$ 22 mil), 
// Classe B: (renda mensal domiciliar entre R$ 7,1 mil e R$ 22 mil), Classe C: (renda mensal domiciliar entre R$ 2,9 mil e R$ 7,1 mil), 
// Classes D/E: (renda mensal domiciliar até R$ 2,9 mil); 
let renda = 2000; 
if (renda >= 22000) {
    console.log("Sua renda faz parte da Classe A.");
}

if (renda >= 7100 && renda < 22000) {
    console.log("Sua renda faz parte da Classe B.");
}

if (renda >= 2900 && renda < 7100) {
    console.log("Sua renda faz parte da Classe C.");
}

if (renda < 2900 ) {
    console.log("Sua renda faz parte da Classe D/E.");
}
console.log("");
// 3. Crie um programa que peça o nome e a idade do usuário, e verifique qual a sua fase de vida. Por exemplo, até 11 anos criança, de 12 a 20 adolescente, 
// de 21 a 65 adulto, e 65 para cima idoso.  
let nome0 = "Pablo"; 
let idade = 18; 

if (idade <= 11) {
    console.log(nome0 + " Fase da Vida: Criança.");
}

if (idade >= 12 && idade <= 20) {
    console.log(nome0 + " Fase da Vida: Adolescente.");
}

if (idade >= 21 && idade < 65) {
    console.log(nome0 + " Fase da Vida: Adulto.");
}

if (idade >= 65) {
    console.log(nome0 + " Fase da Vida: Idoso.");
}
console.log("");

// 4. Calcule a média de três números e exiba se a média é maior ou igual a 7. 
let num1 = 25; 
let num2 = 35; 
let num3 = 45;
let soma = (num1 + num2 + num3); 
let media = soma / 3; 
console.log("A média dos números são: " + media);
console.log("");

// 5. Solicite um número ao usuário e exiba todos os números pares de 0 até o número inserido. 
let numero = 6;
let par = [];

for (let i = 0; i <= numero; i++) {
    if (i % 2 === 0) {
        par.push(i);
    }
}
console.log(par);
console.log("");

// 6. Crie um programa que conte de 1 até 10 usando um loop while.
let a = 1; 
while (a <= 10) {
    console.log("Número: " + a);
    a++
}
console.log("");

// 7. Solicite um número ao usuário e exiba a tabuada desse número de 1 a 10. 
let tabuada = 5;
for (let i = 1; i <= 10; i++) {
  console.log("Tabuada: " + tabuada * i);
}
console.log("");

// 8. Calcule e exiba a média de 5 números inseridos pelo usuário. Se a média for maior que 7, imprima "Aprovado", senão, imprima "Reprovado". 
let notas = [10, 10, 10, 10, 10] 
let soma0 = 0; 
for (let i = 0; i < notas.length; i++) {
    soma0 += notas[i]
}
let media0 = soma / notas.length
if (media >= 7) {
    console.log("Aprovado.");
} else {
    console.log("Reprovado.");
}
console.log("");

// 9. Crie um programa que exiba todos os números ímpares entre 50 e 100.
let impar = []; 
for (let i = 50; i <= 100; i++) {
    if (i % 2 === 1) {
        impar.push(i); 
    }
}
console.log(impar);
console.log("");

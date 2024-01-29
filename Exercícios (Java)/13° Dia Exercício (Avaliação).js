// 1. Crie um programa em javascript que calcule a área de um retângulo e imprima o resultado no console.log(). Fórmula: Área = Largura x Comprimento.
let largura = 10; 
let comprimento = 20; 
let area = largura * comprimento;

console.log("A área é: " + area);
console.log("");

// 2. Um aluno recebeu as notas 7, 6 e 6,5 nas provas de matemática. Faça um programa em javascript para saber qual é a média desse aluno. 
// Se a média for maior ou igual a 7, o aluno está aprovado. Caso contrário, será reprovado. 
// O resultado deve ser impresso no console.log() conforme o exemplo: “Sua média é: {média do aluno aqui}, você está aprovado”. 
// Ou: “Sua média é: {média do aluno aqui}, você está reprovado”. 
let nota1 = 6;
let nota2 = 6; 
let nota3 = 6; 
let media = (nota1 + nota2 + nota3) / 3; 
if (media >= 7) {
    console.log(`Sua média é ${media.toFixed(1)}, você está aprovado.`);
} else console.log(`Sua média é ${media.toFixed(1)}, você está reprovado.`);
console.log("");

// 3. Crie um programa em javascript que verifica se um número é positivo, negativo ou zero, e exiba uma mensagem correspondente. 
let escolhaNumero = 0; 
if (escolhaNumero > 0) {
    console.log("Seu número é o positivo.");
} else if (escolhaNumero < 0) {
    console.log("Seu número é negativo.");
} else {
    console.log("Seu número é zero.");
}
console.log("");

// 4. Crie um programa que use um loop for para imprimir apenas os números pares de 1 a 20; 
for (i = 0; i < 21; i++) {
    if (i % 2 === 0) {
        console.log("Número par: " + i);
    }
}
console.log("");
// 5. Crie um programa que use um loop while para imprimir os números de 10 a 1. 
let a = 10; 
while (a >= 1) {
    console.log("Número: " + a);
    a--
}
console.log("");

// 6. Crie um programa que calcula e exibe a soma dos elementos de um array de números.
let array = [10, 10, 10, 10, 10];
let resultado = array[0]; 
for (let a = 1; a < array.length; a++) {
  resultado += array[a]; 
}
console.log("O resultado da soma dos elementos é: " + resultado);
console.log("");

// 7. Solicite um número ao usuário e exiba a tabuada desse número de 1 a 10. 
let tabuada = 10;
for (let i = 1; i <= 10; i++) {
  console.log("Tabuada: " + tabuada * i);
}
console.log("");

// 8. Determine o número de elementos presentes em um array. 
let vetor = [10, 20, 30]; 
console.log("O array possui " + vetor.length + " elementos.");
console.log("");

// 9. Usando o laço for, percorra um array de 3 elementos e faça a soma dos valores, e exiba o resultado final para o usuário. 
let vetores = [100, 100, 100];
let result = vetores[0]; 
for (let a = 1; a < vetores.length; a++) {
  result += vetores[a]; 
}
console.log("Resultado final: " + result);
console.log("");

// 10. Faça uma função que calcule a área de um triângulo. Fórmula: (base x altura) / 2;
let base = 10; 
let altura = 10; 
function calcularTriangulo () {
    return console.log(base * altura / 2); 
}
calcularTriangulo();
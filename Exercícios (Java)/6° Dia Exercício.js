// 1. Crie um novo array contendo todos os elementos de dois arrays existentes.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const novoArray = array1.concat(array2);
console.log(novoArray); 
console.log("");

// 2. Determine o número de elementos presentes em um array.
const array = [10, 20, 30]; 
console.log("O array possui " + array.length + " elementos.");
console.log("");

// 3. Adicione um elemento no final de um array.
const vetor = [100, 200, 300];
vetor.push (400); 
console.log(vetor);
console.log("");

// 4. Adicione um elemento no início de um array.
const vetor1 = [200, 300, 400, 500];
vetor1.unshift(100)
console.log(vetor1); 
console.log("");

// 5. Remova o primeiro elemento de um array.
const meuArray = [1, 2, 3, 4, 5];
meuArray.shift();
console.log(meuArray); 
console.log("");

// 6. Remova o último elemento de um array.
const vetores = [1, 2, 3, 4, 5, 6];
vetores.pop();
console.log(vetores);
console.log("");

// 7. Usando o laço for, percorra um array de 3 elementos e faça a subtração dos valores, e exiba o resultado final para o usuário. 
const z = [50, 20, 20];
let resultadoz = z[0]; 
for (let a = 1; a < z.length; a++) {
  resultadoz -= z[a]; 
}
console.log("O resultado da subtração é: " + resultadoz);
console.log("");

// 8. Usando o for, filtre qual o maior número de um array de 5 elementos.
const h = [10, 20, 30, 40, 50];
let maiornúmero = h[0];

for (let i = 0; i < h.length; i++) {
  if (h[i] > maiornúmero) {
    maiornúmero = h[i];
  }
}
console.log("O maior número do array é: " + maiornúmero);
console.log("");

// 9. Usando o for, filtre qual o menor número de um array de 5 elementos.
const r = [100, 200, 300, 400, 500];
let menornúmero = r[0];

for (let i = 0; i < r.length; i++) {
  if (r[i] < menornúmero) {
    menornúmero = r[i];
  }
}
console.log("O menor número do array é: " + menornúmero);
console.log("");

// 10. Usando o laço for, percorra um array de 4 elementos e calcule a multiplicação de todos os valores, exibindo o resultado final para o usuário.
const y = [10, 10, 10, 10];
let resultadoy = y[0];
for (let b = 1; b < y.length; b++) {
    resultadoy *= y[b];
}
console.log("O resultado da multiplicação é: " + resultadoy);
console.log("");

// 11. Crie um array com 6 números. Usando um loop for, calcule a média dos números presentes no array e mostre o resultado. 
const vetor11 = [10, 20, 30, 40, 50];
let total = 0;
for (let i = 0; i < vetor11.length; i++) {
    total += vetor11[i];
}
let media = total / vetor11.length;
console.log("A média do vetor é de: " + media);
console.log("");

// 12. Dado um array com 8 elementos, solicite ao usuário um número. Use um loop for para verificar se o número está presente no array e exiba uma mensagem apropriada.
let vetor12 = [10, 20, 30, 40, 50, 60, 70, 80]; 
let numeroescolhido = 50; 
let resposta = false; 

    for (let i = 0; i < vetor12.length; i++) {
        console.log (vetor12[i] === numeroescolhido);
        if (vetor12[i] === numeroescolhido) {
            resposta = true; 
            break; 
    } 
    }

        if (resposta) {
        console.log("Número encontrado: " + numeroescolhido); 
    } else {
        console.log("Número não encontrado.");
    }
console.log("");

/* 
const vetor12 = [10, 20, 30, 40, 50, 60, 70, 80]
const escolhanumero = 10; 
const numeroencontrado = vetor12.includes(escolhanumero)
console.log("Número no array é existente ? = " + numeroencontrado) 
*/

// 13. Dado um array com 10 elementos contendo valores 0 e 1, conte quantas vezes o valor 1 aparece no array usando um loop for.
const vetor13 = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1];   
let quantidade = 0;

    for (let i = 0; i < vetor13.length; i++){
        if (vetor13[i] === 1) {
            quantidade++;
        }
    }

console.log ("A quantidade do número 1 no vetor é de: " + quantidade);
console.log("");

// 2.2 Faça um programa que leia um vetor de seis elementos númericos inteiros, calcule e mostre: 
// a. Quantidade de Números Pares.
// b. Quais são os Números Pares.
// c. Quantidade de Números Ímpares.
// d. Quais são os Números Ímpares. 

let vetor22 = [6, 2, 3, 8, 4, 5, 1];
let qtdPares = 0;
let qtdImpares = 0;
const pares = [];
const impares = [];

for (let i = 0; i < vetor22.length; i++) {
    const number = vetor22[i];
    if (number % 2 === 0) {
        qtdPares++;
        pares.push(number);
    } else {
        qtdImpares++;
        impares.push(number);
    }
}

console.log("Quantidade de números pares: " + qtdPares);
console.log("Números pares: " + pares);
console.log("Quantidade de números ímpares: " + qtdImpares);
console.log("Números ímpares: " + impares);
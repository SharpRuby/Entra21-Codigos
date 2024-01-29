// Continuação do exercício do Dia 6.

// 14. Faça um programa que leia e valide as seguintes informações:
/* 
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Sexo: 'f' ou 'm';
Estado Civil: 's', 'c', 'v', 'd';
Se os valores estiverem todos corretos, exiba uma mensagem para o usuário, retornando os valores. Caso não esteja correto, exiba apenas o que está incorreto.
*/ 

let nome = "Pablo";
let idade = 18; 
let salario = 1500; 
let sexo = "Masculino"; 
let estadocivil = "Solteiro"; 
let erros = []; 

if (nome.length < 3) {
    erros.push("Nome");
} else {
    console.log(nome + ": Nome válido.");
}

if (idade > 0 && idade < 150) {
    console.log(idade + ": Idade válida.");
} else {
    erros.push("Idade");
}

if (salario > 0) {
    console.log(salario + ": Seu salário é válido.");
} else {
    erros.push("Salário")
} 

if (sexo == "Masculino" || sexo == "Feminino") {
    console.log(sexo + ": Seu sexo é válido.");
} else {
    erros.push("Sexo")
} 

if (estadocivil == "Solteiro" || estadocivil == "Casado" || estadocivil == "Viúvo" || estadocivil == "Divorciado") {
    console.log(estadocivil + ": Seu estado civil é válido.");
} else {
    erros.push("Estado Civil")
}
if (erros.length !== 0) {
    console.log("As informações a seguir estão incorretas: " + erros + " não estão no padrão esperado.");
}
console.log("");

//15. Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles. - deve ser feito usando o laço for.
let num1 = 10;
let num2 = 15;
let intervalo = []; 

for (let i = num1 + 1; i < num2; i++) {
    intervalo.push(i);
}
console.log("Intervalo entre os números são: " + intervalo);
console.log("");

//16. Repita o programa acima, porém usando o while;
let numero1 = 10;
let numero2 = 15; 
let contador = numero1;
let total = []; 
while (contador < numero2) {
    
    if (contador !== numero1) {
    total.push(contador);
    }
    contador++;
}
console.log("Intervalo entre os números são: " + total);
console.log("");

//17. Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores.
const vetor = [10, 20, 30, 40, 50];
var maiornúmero = vetor[0];
var menornúmero = vetor[0]; 

for (var i = 0; i < vetor.length; i++) {
  if (vetor[i] > maiornúmero) {
    maiornúmero = vetor[i];
  }
}

for (var i = 0; i < vetor.length; i++) {
    if (vetor[i] < menornúmero) {
      maiornúmero = vetor[i];
  }
}
var soma = maiornúmero + menornúmero
console.log("O maior número do array é: " + maiornúmero);
console.log("O menor número do array é: " + menornúmero);
console.log("A soma entre o maior número e menor é: " + soma);
console.log("");

//18. Faça um programa que peça um número inteiro e determine se ele é ou não um número primo.
let numeroescolhido = 5; 
var operacao = Math.sqrt(numeroescolhido);
var éprimo = true;
for (var i = 2; i <= operacao; i++) {
    if (numeroescolhido % i == 0) {
        éprimo = false;
        break;
    }
}

if (éprimo) {
    console.log(numeroescolhido + " é um número primo.");
} else {
    console.log(numeroescolhido + " não é um número primo.");
}
console.log("");

// 19. Em uma competição de salto em distância cada atleta tem direito a cinco saltos. No final da série de saltos de cada atleta, o melhor e o pior resultados são eliminados. 
/*
O seu resultado fica sendo a média dos três valores restantes. Você deve fazer um programa que receba o nome e as cinco distâncias alcançadas pelo atleta em seus saltos e depois 
informe a média dos saltos conforme a descrição acima informada (retirar o melhor e o pior salto e depois calcular a média). Faça uso de uma lista para armazenar os saltos. 
Os saltos são informados na ordem da execução, portanto não são ordenados. O programa deve ser encerrado quando não for informado o nome do atleta. 
A saída do programa deve ser conforme o exemplo abaixo:

a) Atleta: Rodrigo Curvêllo
b) Primeiro Salto: 6.5 m
c) Segundo Salto: 6.1 m
d) Terceiro Salto: 6.2 m
e) Quarto Salto: 5.4 m
f) Quinto Salto: 5.3 m
g) Melhor salto:  6.5 m
h) Pior salto: 5.3 m
i) Média dos demais saltos: 5.9 m
j) Resultado final: Rodrigo Curvêllo: 5.9 m
*/

let saltos = [6.5, 6.1, 6.2, 5.4, 5.3]
let primeiro = saltos[0];
let segundo = saltos[1];
let terceiro = saltos[2];
let quarto = saltos[3];
let quinto = saltos[4];

let atleta = "Rodrigo Curvêllo";
let somaNotas = 0;

saltos.sort((a, b) => a - b);
let piorsalto = saltos[0]
let melhorsalto = saltos[saltos.length - 1]

saltos.shift();
saltos.pop();

for (let i = 0; i < saltos.length; i++) {
       somaNotas += saltos[i];
}

let media = somaNotas / saltos.length;

console.log
    (`
    Atleta: ${atleta} 
    Primeiro salto: ${primeiro} 
    Segundo salto: ${segundo} 
    Terceiro salto: ${terceiro} 
    Quarto salto: ${quarto} 
    Quinto salto: ${quinto} 
    Melhor salto: ${melhorsalto} 
    Pior salto: ${piorsalto} 
    Média dos demais saltos: ${media.toFixed(1)} 
    Resultado final: ${atleta}: ${media.toFixed(1)} 
    `);
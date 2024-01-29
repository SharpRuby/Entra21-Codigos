// Criação de Variáveis
//1; 
let nome = "Pablo"; 
let idade = 18; 

console.log("Olá, meu nome é " + nome + " e eu tenho " + idade + " anos.");
console.log("");

//2; 
let destino = "Curitiba"; 
let dias = 10; 
let orcamento = 1500; 

console.log("Estou planejando uma viagem para " + destino + " por " + dias + " dias, com um orçamento de R$" + orcamento + ".");
console.log("");

//3; 
let produto = "carro"; 
let preco = 40000; 
let parcelas = 4; 
console.log("Estou interessado em comprar um " + produto + " por R$" + preco + " dividido em " + parcelas + " parcelas.");
console.log("");

//4; 
let profissao = "policial"; 
let experiencia = 8 + " anos"
console.log("Olá ! Sou " + nome + ", " + profissao + " com " + experiencia + " de experiência na área.");
console.log("");

// Operadores Matemáticos
// 1; 
console.log(1 + 1);
console.log("");

//2; 
console.log(10 - 5);
console.log("");

//3; 
console.log(2 * 2);
console.log("");

//4; 
console.log(9 / 3);
console.log("");

//5;
console.log(9 / 3 % 1);
console.log("");

//6; 
console.log(5 ^ 10);
console.log("");

//7; 
console.log(10 + 15 + 20 / 3);
console.log("");

//8; 
let celsius = 20; 
console.log((celsius * 9/5) + 32);
console.log("");

//9; 
let altura = 5; let largura = 7; 
let area = altura * largura; 
console.log("A área do nosso retângulo é: " + area);
console.log("");

//10; 
let precoinicial = 80;
let precoatual = 96; 
let diferenca = precoatual - precoinicial; 
let aumento = (diferenca / precoinicial) * 100; 
console.log("O aumento porcentual foi de " + aumento + "%.");
console.log("");

//Verificações
//1;
let num = 9; 
if (num % 2 === 0) {
    console.log("Número é par.");
} else {
    console.log("Número é ímpar.");
}
console.log("");
//2;
let idade_ = 18; 
if (idade_ >= 18) {
    console.log("Sua idade é " + idade_ + " = Entrada aprovada.");
} else {
    console.log("Sua idade é " + idade_ + " = Entrada negada.");
}
console.log("");
//3;
let escolha = -1; 
if (escolha > 0) {
    console.log("Seu número é positivo.");
}

if (escolha === 0) {
    console.log("Seu número é zero.");
}

if (escolha < 0) {
 console.log("Seu número é negativo.");
}

/*
if (escolha > 0) {
    console.log("Seu número é positivo.");
} else if (escolha < 0) {
    console.log("Seu número é negativo.");
} 
*/

console.log("");
//4;
let lado1 = 8; 
let lado2 = 8; 
let lado3 = 8; 

if (lado1 == lado2 && lado3 == lado1) {
    console.log("Seu triângulo é um equilátero.");
} else if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
    console.log("Seu triângulo é um isósceles.");
}

if (lado1 != lado2 && lado2 != lado3 && lado3 != lado1) {
    console.log("Seu triângulo é um escaleano.");
}
console.log("");
//5;
let preco_ = 100; 
let porcentual = 10;
let desconto = (preco_ * porcentual) / 100;  
let precodesconto = preco_ - desconto

if (preco_ >= 100 && porcentual >= 10) {
    console.log("Seu produto com desconto ficou a: " + precodesconto);
} else {
    console.log("Impossível adicionar desconto.");
}
console.log("");
//6;
let ano = 2005;

if (ano % 400 == 0 || ano % 4 == 0 && ano % 100 !== 0) {
    console.log(`O ano ${ano} é bissexto.`);
} else {
    console.log("O ano não é bissexto.");
}
console.log("");

//7;
var estacao = 1;
switch (estacao) {
    case 1 || 2 || 3: 
    console.log("Verão.");
    break; 

    case 4 || 5 || 6: 
    console.log("Outono.");
    break; 

    case 7 || 8 || 9: 
    console.log("Inverno.");
    break; 
    
    case 10 || 11 || 12: 
    console.log("Primavera.");
    break; 
} 
console.log("");

//Estruturas de Repeticões
//1;
for (let a = 1; a <= 10; a++) {
    console.log("Número: " + a);
}
console.log("");

//2; 
for (let c = 0; c <= 20; c += 2) {
    console.log("Par: " + c);
}
console.log("");

//3;
let i = 10; 
while (i >= 1) {
    console.log("Número: " + i);
    i--; 
}
console.log("");

//4;
let x = 2;
do {
  console.log("Par:", x);
  x += 2;
} while (x <= 10);
console.log("");

//5;
for (let i = 1; i <= 10; i++) {
    var soma_ = 0;
    soma_ += i;
  }
  console.log("O resultado é: " + soma_);
console.log("");

//6;
let tabuada = 5;
let count = 1;

while (count <= 10) {
  console.log("Tabuada do 5: " + tabuada * count);
  count++;
}
console.log("");

//7;
const tabuada2 = 3;

for (let i = 1; i <= 10; i++) {
  console.log("Tabuada pelo usuário: " + tabuada2 * i);
}
console.log("");

//Arrays
//1; 
let vetor = [1, 2, 3, 4, 5]; 
let soma = vetor[0] + vetor[1] + vetor[2] + vetor[3] + vetor[4];
console.log("Soma do vetor total é: " + soma);

/* let array = [1, 1, 1];
for(let i = 0; i <= array.length; i++) {
    var soma = 0;
    soma += i;
}

console.log('A soma dos elementos do array é: ', soma);
*/ 
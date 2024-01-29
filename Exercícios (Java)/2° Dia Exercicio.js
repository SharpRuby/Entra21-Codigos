//Area = largura * Altura
//Perimetro = 2 * (largura + Altura)

let altura = 5; let largura = 7; 
let area = altura * largura; 
console.log("A área do nosso retângulo é: " + area);

let perimetro = 2 * area; 
console.log("O perimetro do nosso retângulo é: " + perimetro);

//
console.log("");
//

let nota1 = 8; let nota2 = 7; let nota3 = 7.5; 
let media = nota1 + nota2 + nota3 / 3;  
console.log("Sua média é: " + media);

//
console.log("");
//

var valor = 1500; var taxa = 10; 
var aumento = valor * (1 + taxa/100); 
console.log("Seu valor com aumento ficou a: " + aumento.toFixed(2));

//
console.log("");
//

var nome = "Pablo"; 
var ano = 2023; var anonascimento = 2005; 
var idade = ano - anonascimento; 
console.log("Seu nome é: " + nome); 
console.log("Você tem: " + idade);

//
console.log("");
//

let idade_ = 16; 
if (idade >= 18) {
    console.log("Você pode beber cerveja.");
} else {
    console.log("Você pode beber apenas suco.");
}

//
console.log("");
//

let num1 = 14; let num2 = 39; let num3 = 26; 
if (num1 > num2 && num1 > num3) {
    console.log("O maior número é o número 1: " + num1);
} else if (num2 > num3) {
    console.log("O maior número é o número 2: " + num2);
} else if (num3 > num1) {
    console.log("O maior número é número 3: " + num3);
}

//
console.log("");
//

let number1 = 50; let number2 = 25; 
let calculo = "+"; 
switch (calculo) {
    case "+": 
    console.log("Operação +: " + (number1 + number2));
    break; 

    case "-":
    console.log("Operação -: " + (number1 - number2));
    break;

    case "/":
    console.log("Operação /: " + (number1 / number2));
    break;

    case "*":
    console.log("Operação *: " + (number1 * number2));
    break; 

    default: 
    console.log("Operação Inválida.");

}

//
console.log("");
//


 var classificacao = 100; 
if (classificacao >= 90 && classificacao <= 100) {
    console.log(classificacao + ":" + " Sua classificação é A."); 
}

if (classificacao >= 80 && classificacao <= 89) {
    console.log(classificacao + ":" + " Sua classificação é B."); 
}

if (classificacao >= 70 && classificacao <= 79) {
    console.log(classificacao + ":" + " Sua classificação é C."); 
}

if (classificacao >= 60 && classificacao <= 69) {
    console.log(classificacao + ":" + " Sua classificação é D."); 
}

if (classificacao >= 40 && classificacao <= 59) {
    console.log(classificacao + ":" + " Sua classificação é E."); 
}

if (classificacao >= 30 && classificacao <= 49) {
    console.log(classificacao + ":" + " Sua classificação é F."); 
}

if (classificacao >= 101) {
    console.log("Resultado inaceitável."); 
}

//Ou...

var nota = 100; 
switch (true) {
    case nota >= 90:
    console.log("Classificação: A.");
    break;

    case nota >= 80:
    console.log("Classificação: B.");
    break;

    case nota >= 70:
    console.log("Classificação: C.");
    break;

    case nota >= 60:
    console.log("Classificação: D.");
    break;

    case nota >= 50:
    console.log("Classificação: E.");
    break;

    case nota >= 40:
    console.log("Classificação: F.");
    break;
    
}
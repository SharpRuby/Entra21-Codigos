// Exercícios Funções

// 1. Declarar a função e o que ela vai fazer. Neste exemplo, queremos que ela imprima algum texto. 
function imprimir () {
    return "Algum texto."
} 

console.log(imprimir()); 
console.log("");

// 2. Chamar a função em seguida e passar um texto para que ela possa imprimir.  
function texto(conteudo) {
    return "A frase dia é: " + conteudo
}
let mensagem = texto("Hoje é Sexta Feira.")
console.log(mensagem);
console.log("");

// 3. Calcular a média de 2 números e imprimir no console.
let nota1 = 10;
let nota2 = 10;
function calculo(a , b) {
    return (nota1 , nota2) / 2
}

console.log("A média é: " + calculo());
console.log("");

// 4. Verificar se um número é positivo, negativo ou zero; 
function verificarNumero(numero) {
    if (numero > 0) {
        return "Número é positivo."
    } else if (numero < 0) {
        return "Número é negativo."
    } else {
        return "Número é zero."
    }
}

let resposta = verificarNumero(0);
console.log(resposta);
console.log("");

// 5. Faça uma função que calcule a área de um triângulo : (base x altura) / 2
let base = 20; 
let altura = 10; 
function calcularTriangulo (a, b) {
    return (base * altura) / 2
}

console.log("A área do triângulo é " + calcularTriangulo() + ".");
console.log("");

// 6. Crie um programa que faça a conversão de unidades de tempo, ou seja, o usuário vai informar quantidade de dias, horas, minutos e segundos e você deve 
// calcular tudo em segundos e retornar o valor para o usuário. 
function conversao(dias, horas, minutos, segundos) {
    let diasSegundos = dias * 24 * 60 * 60
    let horasSegundos = horas * 60 * 60 
    let minutosSegundos = minutos * 60

    return diasSegundos + horasSegundos + minutosSegundos + segundos
}

let escolhaTempo = conversao(2, 5, 15, 0)
console.log(escolhaTempo + " segundos.");
console.log("");

// 7. Desenvolva um programa que obtenha do usuário um número inteiro de 4 dígitos e exiba a soma dos dígitos do número. 
// Por exemplo, se o usuário fornecer o número 3141, então seu programa deve exibir o número 9 (3 + 1 + 4 + 1). 
function calcularSomaDigitos(numero) {
    let soma = 0;
    while (numero > 0) {
        let digito = numero % 10;
        soma += digito;
        numero = Math.floor(numero / 10);
    }
    return soma;
}

let numero = 3141; 

if (numero >= 1000 && numero <= 9999) {
    
    let soma = calcularSomaDigitos(numero);
    console.log("A soma dos dígitos do número " + numero + " é " + soma + ".");
} else {
    console.log("O número deve ter exatamente 4 dígitos.");
}
console.log("");

// 8. Escreva um programa Javascript que peça para o usuário uma letra do alfabeto. 
// Se o usuário entrar com as letras a, e, i, o ou u, o programa deve exibir uma mensagem dizendo que a letra é uma vogal. 
// Caso contrário, o programa deve exibir a mensagem informando que a letra é uma consoante.
let escolhaletra = "a"; 
function letraAlfabeto (letra) {
    if (letra === "a") {
        return "Vogal."
    } else if (letra === "e") {
        return "Vogal."
    } else if (letra === "i") {
        return "Vogal."
    } else if (letra === "o") {
        return "Vogal."
    } else if (letra === "u") {
        return "Vogal."
    } else return "Consoante."
    
} 
console.log(letraAlfabeto(escolhaletra));
console.log("");

// 9. Um determinado zoológico estipula o valor da entrada baseado na idade do visitante. Visitantes com até dois anos de idade não precisam pagar. 
// Crianças entre 3 e 12 anos de idade pagam R$ 14.00. Idosos com 65 anos ou mais pagam R$ 18.00. Todos os demais pagam R$ 23.00. 
// Crie um programa que inicia lendo as idades, uma por uma, de um grupo de pessoas. O usuário deve entrar uma linha em branco para indicar que não há mais pessoas no grupo. 
// Depois disso, seu programa deve exibir uma mensagem informando o preço total de todas as entradas para o grupo. O valor deve ser exibido com duas casas decimais.
function calcularEntradasZoo(idades) {
    let entradaTotal = 0;

    for (let idade of idades) {
        if (idade <= 2) {
            entradaTotal += 0;
        } else if (idade >= 3 && idade <= 12) {
            entradaTotal += 14;
        } else if (idade >= 65) {
            entradaTotal += 18;
        } else {
            entradaTotal += 23;
        }
    }

    return entradaTotal;
}

let idades = [15, 18];



let entradaTotal = calcularEntradasZoo(idades);
console.log("O preço total das entradas é: " + entradaTotal.toFixed(2));

// 10. Palavras como primeiro, segundo e terceiro são chamadas de números ordinais. 
// Neste exercício, você deve escrever uma função que recebe um inteiro como seu único parâmetro e retorna uma string contendo o número ordinal em português como seu único resultado. 
// Sua função deve lidar com números inteiros entre 1 e 12 (inclusive). Ela deve retornar uma string vazia se um valor fora desse intervalo for fornecido como um parâmetro. 
// Inclua um programa principal que demonstra sua função exibindo cada inteiro de 1 a 12 e seu respectivo número ordinal.
function numOrdinal (numero) {
    if (escolhaNumero === 1) {
        return escolhaNumero + ": Primeiro."
    } else if (escolhaNumero === 2) {
        return escolhaNumero + ": Segundo."
    } else if (escolhaNumero === 3) {
        return (escolhaNumero + ": Terceiro.")
    } else if (escolhaNumero === 4) {
        return (escolhaNumero + ": Quarto.")
    } else if (escolhaNumero === 5) {
        return (escolhaNumero + ": Quinto.")
    } else if (escolhaNumero === 6) {
        return (escolhaNumero + ": Sexto.")
    } else if (escolhaNumero === 7) {
        return (escolhaNumero + ": Sétimo.")
    } else if (escolhaNumero === 8) {
        return (escolhaNumero + ": Oitavo.")
    } else if (escolhaNumero === 9) {
        return (escolhaNumero + ": Nonô.")
    } else if (escolhaNumero === 10) {
        return (escolhaNumero + ": Décimo.")
    } else if (escolhaNumero === 11) {
        return (escolhaNumero + ": Décimo Primeiro.")
    } else if (escolhaNumero === 12) {
        return (escolhaNumero + ": Décimo Segundo.")
    } else return "()"

}
let escolhaNumero = 1;  
console.log(numOrdinal(escolhaNumero));
console.log("");
if (true) {
    var a = 10; 
    console.log(a);
    let b = 5; 
    console.log(b + ' - Dentro do If'); 
}

console.log(a);

let b = 5; 
console.log(b + ' - Fora do If'); 

// Pós exercícios.

let idade = 20; 
if (idade >= 18) {
    console.log("Você tem é maior de idade.");
} else { 
console.log("Você é menor de idade.");
}

let diaDaSemana = "Segunda"; 
switch (diaDaSemana) {
    case "Segunda": 
    console.log("Hoje é Segunda-Feira.");
    break; 
    case "Terça":
    console.log("Hoje é Terça-Feira.");
    break;
    case "Quarta":
    console.log("Hoje é Quarta-Feira.");
    break;
    case "Quinta":
    console.log("Hoje é Quinta-Feira.");
    break;
    case "Sexta":
    console.log("Hoje é Sexta-Feira.");
    break;
    default: 
    console.log("Dia inválido.");

}
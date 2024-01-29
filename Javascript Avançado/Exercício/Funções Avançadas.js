//1
const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter((numero) => numero % 2 === 0);
console.log(pares);

//2
const Nomes = ["João", "Fernando", "Roberto", "Pablo"]
const upper = Nomes.map(function (x) { return x.toUpperCase(); });
console.log(upper);

//3
var nomes = ['Clara', 'Débora', 'Laércio'];
const saudacao = nomes.forEach((nomes) => console.log("Olá, seja bem vindo: " + nomes));

// 3 Maneira diferente
// const pets = 
// [   { nome: 'Pessoa Alta', tipo: 'Você pode passar!'}, 
//     { nome: 'Pessoa Baixa' , tipo: 'Você não pode passar!'},
//     { nome: 'Mulher' , tipo: 'Tome cuidado moça!'},
//     { nome: 'Homem' , tipo: 'Tome cuidado moço!'} ]; 

// function saudacaopet(pet) {
//     console.log(`Você é uma ${pet.nome}! ${pet.tipo}.`);
// }
// pets.forEach(saudacaopet)

//4
var frutas = ['banana', 'limão', 'acerola', 'jabuticaba'];
const apenasB = frutas.filter((frutas) => frutas.charAt(0) === 'b');
console.log(apenasB);
const capslock = apenasB.map((apenasB) => apenasB.toUpperCase());
console.log(capslock);

//5
let array5 = [{
    nome: 'Tamires',
    nota: [5, 5, 5]
},
{
    nome: 'Leonardo',
    nota: [10, 8, 6]

}];

let calcularMedia = array5.map((aluno) => {
    let sum = aluno.nota.reduce((total, value) => total + value, 0);
    let average = sum / aluno.nota.length;

    return {
        nome: aluno.nome,
        media: average.toFixed(2)
    };

});

console.log(calcularMedia);
let alunosAprovados = calcularMedia.filter((aluno) => aluno.media >= 7);
console.log(alunosAprovados);

calcularMedia.forEach((aluno) => {

    let mensagem = aluno.media >= 7 ? 'Aprovado' : 'Reprovado';
    console.log(`A média de ${aluno.nome} é ${aluno.media}, portanto, está ${mensagem}.`);

});

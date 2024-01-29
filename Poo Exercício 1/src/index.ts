import { Aluno } from "./aluno"
import { Turma } from "./turma"
import { Escola } from "./escola"

let Pablo: Aluno = {
    nome: "Pablo", 
    sobrenome: "Romano Calegari",
    genero: "Masculino", 
    dataDeNascimento: new Date(2005, 2, 18),

    notas: [10, 8, 9],
    media: 0,
    menorNota: 0,
    maiorNota: 0 
}

let Roberto: Aluno = {
    nome: "Roberto", 
    sobrenome: "Alexandre",
    genero: "Masculino", 
    dataDeNascimento: new Date(2003, 10, 11),
    
    notas: [4, 6, 9],
    media: 0,
    menorNota: 0,
    maiorNota: 0
}

let Laércio: Aluno = {
    nome: "Laércio", 
    sobrenome: "Roberto",
    genero: "Masculino", 
    dataDeNascimento: new Date(1999, 5, 30),
    
    notas: [2, 10, 7],
    media: 0,
    menorNota: 0,
    maiorNota: 0
}

let TurmaUm: Turma = {
    nome: 'Turma 01',
    quantidadeAlunos: 3,
    turno: 'Matutino',
    serieTurma: 1,
    alunos: [Pablo, Roberto, Laércio]
}

let TurmaDois: Turma = {
    nome: 'Turma 02',
    quantidadeAlunos: 3,
    turno: 'Noturno',
    serieTurma: 2,
    alunos: [Pablo, Roberto, Laércio]
}

// Função para calcular a Média
function calcularMedia(notas: number[]): number {
    const somanotas = notas.reduce((soma, nota) => soma + nota, 0);
    return somanotas / notas.length;
}

// Calculando a média de cada aluno
Pablo.media = calcularMedia(Pablo.notas);
Roberto.media = calcularMedia(Roberto.notas);
Laércio.media = calcularMedia(Laércio.notas);

// Log da média de cada aluno
console.log(`Média do aluno ${Pablo.nome}: ${Pablo.media}`); // Exibir média de cada aluno
console.log(`Média do aluno ${Roberto.nome}: ${Roberto.media}`);
console.log(`Média do aluno ${Laércio.nome}: ${Laércio.media}`);

// Função para achar a nota mais baixa
function encontrarNotaMaisBaixa(notas: number[]): number {
    return notas.reduce((menorNota, nota) => {
      return nota < menorNota ? nota : menorNota;
    }, notas[0]);
}

// Calculando a nota mais baixa de cada aluno

Pablo.menorNota = encontrarNotaMaisBaixa(Pablo.notas);
Roberto.menorNota = encontrarNotaMaisBaixa(Roberto.notas);
Laércio.menorNota = encontrarNotaMaisBaixa(Laércio.notas);

// Log da nota mais baixa de cada aluno
console.log(`A menor nota de ${Pablo.nome}: ${Pablo.menorNota}`); 
console.log(`A menor nota de ${Roberto.nome}: ${Roberto.menorNota}`);
console.log(`A menor nota de ${Laércio.nome}: ${Laércio.menorNota}`);

// Função para achar a nota mais alta
function encontrarNotaMaisAlta(notas: number[]): number {
    return notas.reduce((maiorNota, nota) => {
      return nota > maiorNota ? nota : maiorNota;
    }, notas[0]);
}

// Calculando a nota mais alta de cada aluno

Pablo.maiorNota = encontrarNotaMaisAlta(Pablo.notas);
Roberto.maiorNota = encontrarNotaMaisAlta(Roberto.notas);
Laércio.maiorNota = encontrarNotaMaisAlta(Laércio.notas);

// Log da nota mais alta de cada aluno
console.log(`A maior nota de ${Pablo.nome}: ${Pablo.maiorNota}`); 
console.log(`A maior nota de ${Roberto.nome}: ${Roberto.maiorNota}`);
console.log(`A maior nota de ${Laércio.nome}: ${Laércio.maiorNota}`);
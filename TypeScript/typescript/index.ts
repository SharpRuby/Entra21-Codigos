//console.log("Olá mundo!");

import { imprimir } from "./funcao";

let number: number = 42; 
let nome: string = "Pablo";
let booleana: boolean = true; 

let array: number[] = [12, 13, 14, 15];
let arrayString: string[] = ["Fernanda", "Fernando"]; 

//console.log(arrayString);

enum tipoPessoa {
    FISICA,
    JURIDICA
}

let pessoa: tipoPessoa; 
pessoa = tipoPessoa.FISICA;
//console.log(pessoa);

let qualquerCoisa: any = 50; 
qualquerCoisa = "Fernanda"; 
qualquerCoisa = []; 

function somar(a: number, b: number): number {
    let soma = a + b; 
    return soma; 
}

let resultado: number = somar(10, 5);
//console.log(resultado);

interface Pessoa {
    nome: string, 
    idade: number
} 

let persona: Pessoa = {
    nome: 'Fernanda', 
    idade: 20
}

//console.log(persona);

imprimir(); 

function primeiroElemento<Generico>(array: Generico[]): Generico {
    return array[0]; 
}

const numeros: number[] = [1, 2, 3, 4, 5]
let num = primeiroElemento(numeros); 
console.log(num);


const nomes: string[] = ["Pablo", "Fernando", "Rodrigo"];
let nom = primeiroElemento(nomes)
console.log(nom);
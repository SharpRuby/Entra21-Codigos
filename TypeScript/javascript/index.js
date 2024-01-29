"use strict";
//console.log("Olá mundo!");
Object.defineProperty(exports, "__esModule", { value: true });
const funcao_1 = require("./funcao");
let number = 42;
let nome = "Pablo";
let booleana = true;
let array = [12, 13, 14, 15];
let arrayString = ["Fernanda", "Fernando"];
//console.log(arrayString);
var tipoPessoa;
(function (tipoPessoa) {
    tipoPessoa[tipoPessoa["FISICA"] = 0] = "FISICA";
    tipoPessoa[tipoPessoa["JURIDICA"] = 1] = "JURIDICA";
})(tipoPessoa || (tipoPessoa = {}));
let pessoa;
pessoa = tipoPessoa.FISICA;
//console.log(pessoa);
let qualquerCoisa = 50;
qualquerCoisa = "Fernanda";
qualquerCoisa = [];
function somar(a, b) {
    let soma = a + b;
    return soma;
}
let resultado = somar(10, 5);
let persona = {
    nome: 'Fernanda',
    idade: 20
};
//console.log(persona);
(0, funcao_1.imprimir)();
function primeiroElemento(array) {
    return array[0];
}
const numeros = [1, 2, 3, 4, 5];
let num = primeiroElemento(numeros);
console.log(num);
const nomes = ["Pablo", "Fernando", "Rodrigo"];
let nom = primeiroElemento(nomes);
console.log(nom);

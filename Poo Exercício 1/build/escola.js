"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escola = void 0;
class Escola {
    constructor(nome, totalTurmas, totalAlunos) {
        this.nome = nome;
        this.totalTurmas = totalTurmas;
        this.totalAlunos = totalAlunos;
        this.turmas = [];
    }
}
exports.Escola = Escola;

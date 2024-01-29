import { Turma } from "./turma";

export class Escola {
    nome: string; 
    totalTurmas: number;
    totalAlunos: number;
    turmas: Turma[]; 
    
    constructor(nome: string,  totalTurmas: number,  totalAlunos: number) {
        this.nome = nome; 
        this.totalTurmas = totalTurmas; 
        this.totalAlunos = totalAlunos;  
        this.turmas = []; 
    }
}
import { Aluno } from "./aluno";

export interface Turma {
    nome: string; 
    quantidadeAlunos: number;
    turno: string; 
    serieTurma: number; 
    alunos: Aluno[]; 
}
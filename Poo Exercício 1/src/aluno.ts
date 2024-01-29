export interface Aluno {
    nome: string; 
    sobrenome: string;
    genero: string; 
    dataDeNascimento: Date;

    notas: number[];
    media: number;  
    menorNota: number; 
    maiorNota: number;
}
import { Imoveis } from "./imoveis";

export class Condominio {
    id: number; 
    nome: string; 
    avaliacao: string;
    imoveis: Imoveis;
 
    constructor(id: number, nome: string, avaliacao: string, imoveis: Imoveis) {
        this.id = id; 
        this.nome = nome; 
        this.avaliacao = avaliacao; 
        this.imoveis = imoveis; 
    }
}
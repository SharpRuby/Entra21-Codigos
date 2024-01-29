import { Pessoas } from "./pessoas";

export class Imoveis {
    id: number; 
    nomeImovel: string; 
    morador: Pessoas;
    
    constructor(id: number, nomeImovel: string, morador: Pessoas) {
        this.id = id;
        this.nomeImovel = nomeImovel; 
        this.morador = morador; 
    }
}
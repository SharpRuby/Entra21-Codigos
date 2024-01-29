import { Imoveis } from "./imoveis";

export class Fatura {
    id: number;
    valor: string; 
    data: string;
    imovel: Imoveis;
    estadoPagamento: boolean;  

    constructor(id: number, valor: string, data: string, imovel: Imoveis, estadoPagamento: boolean) {
        this.id = id;
        this.valor = valor; 
        this.data = data;
        this.imovel = imovel;
        this.estadoPagamento = false;  
    }
}
import express, { Request, Response, json, request} from 'express';
import "reflect-metadata"
import { Condominio } from './condominio';
import { Fatura } from './fatura';
import { Imoveis } from './imoveis';
import { Pessoas } from './pessoas';

const condominios: Condominio[] = [];
const fatura: Fatura[] = [];  
const imoveis: Imoveis[] = [];  
const pessoas: Pessoas[] = [];  

const server = express();
server.use(json())

///////////////////////////////////////////////////////////////////////////

server.get("/pessoas", (request: Request, response: Response) => {
    return response.json(pessoas)
})

server.post("/pessoas", (request: Request, response: Response) => {

    let novoPessoa: Pessoas = {
    nomePessoa: request.body.nomePessoa,
    datadeNascimento: request.body.datadeNascimento,  
    email: request.body.email
    };

    pessoas.push(novoPessoa);
    return response.status(201).json(novoPessoa);
})

///////////////////////////////////////////////////////////////////////////

server.get("/imoveis", (request: Request, response: Response) => {
    return response.json(imoveis)
});

server.post("/imoveis", (request: Request, response: Response) => {

    const morador = pessoas.find(
        (morador: Pessoas) => morador.nomePessoa == request.body.nomePessoa
        );

    if (!morador) {
        return response.status(400).json({
            error: "Morador não encontrando!", 
        });
    }

    let novoImovel: Imoveis = new Imoveis (
        request.body.nomeImovel, 
        morador
    );

    imoveis.push(novoImovel);
    return response.status(201).json(novoImovel)
});

///////////////////////////////////////////////////////////////////////////

server.get("/fatura", (request: Request, response: Response) => {
    return response.json(fatura)
});

server.post("/fatura", (request: Request, response: Response) => {

    const procurandoImovel = imoveis.find(
        (boleto: Imoveis) => boleto.nomeImovel == request.body.imovel
    );

    if (!procurandoImovel) {
        return response.status(400).json({
            error: "Boleto não encontrado!"
        });
    }

    let novoBoleto: Fatura = new Fatura (
        request.body.id,
        request.body.valor,
        request.body.data,
        procurandoImovel,
        request.body.estadoPagamento
    );

    fatura.push(novoBoleto);
    return response.status(201).json(novoBoleto)
});


///////////////////////////////////////////////////////////////////////////

server.put("/fatura/:id", (request: Request, response: Response) => {
    const faturaId = request.params.id; 

    const acharFaturaId = fatura.find((fatura) => String(fatura.id) === faturaId);

    if (!acharFaturaId) {
        return response.status(404).json({ error: "Fatura não encontrada!" });
    }
    
    acharFaturaId.estadoPagamento = request.body.estadoPagamento;

    return response.json(acharFaturaId);
});

///////////////////////////////////////////////////////////////////////////

server.get("/condominio", (request: Request, response: Response) => {
    return response.json(condominios)
});

server.post("/condominio", (request: Request, response: Response) => {

    const procurandoImovel = imoveis.find(
        (condominio: Imoveis) => condominio.nomeImovel == request.body.imoveis
    );

    if (!procurandoImovel) {
        return response.status(400).json({
            error: "Condominio não encontrado!"
        });
    }

    let novoCondominio: Condominio = new Condominio (
        request.body.nome,  
        request.body.avaliacao, 
        procurandoImovel
    );

    condominios.push(novoCondominio);
    return response.status(201).json(novoCondominio)
});

///////////////////////////////////////////////////////////////////////////

server.listen(5000, () => {
    console.log("Servidor escutando na porta 5000.");
})

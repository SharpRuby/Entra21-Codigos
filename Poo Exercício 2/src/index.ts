import { AppDataSource } from "./data-source"
import express, { Request, Response, json} from 'express';
import { Pessoas } from "./entity/Dados"
import { Imoveis } from "./entity/Dados"
import { Fatura } from "./entity/Dados"
import { Condominio } from "./entity/Dados"

const server = express();
server.use(json())

//////////////////////////////////////////////////////////////////////

server.get("/pessoas", async (request: Request, response: Response) => {
    const pessoaRepository = AppDataSource.getRepository(Pessoas);
    const pessoas = await pessoaRepository.find();
    return response.json(pessoas)
})

server.post("/pessoas", async (request: Request, response: Response) => {
    const pessoaRepository = AppDataSource.getRepository(Pessoas);
    let novaPessoa = new Pessoas();
    novaPessoa.id = request.body.nomePessoa,
    novaPessoa.nomePessoa = request.body.nomePessoa,
    novaPessoa.datadeNascimento = request.body.datadeNascimento,
    novaPessoa.email = request.body.email
 
    await pessoaRepository.save(novaPessoa)
    return response.status(201).json(novaPessoa);
})

//////////////////////////////////////////////////////////////////////

server.get("/imoveis", async (request: Request, response: Response) => {
    const pessoaRepository = AppDataSource.getRepository(Imoveis);
    const imoveis = await pessoaRepository.find();
    return response.json(imoveis)
})

server.post("/imoveis", async (request: Request, response: Response) => {
    const imoveisRepository = AppDataSource.getRepository(Imoveis);
    const pessoasRepository = AppDataSource.getRepository(Pessoas);
    const pessoa = await pessoasRepository.findOneBy({
        id: request.body.moradorId
    })
    let novoImovel = new Imoveis();
    novoImovel.id = request.body.nomeImovel,
    novoImovel.nomeImovel = request.body.nomeImovel,
    novoImovel.morador = pessoa
 
    await imoveisRepository.save(novoImovel)
    return response.status(201).json(novoImovel);
})

//////////////////////////////////////////////////////////////////////

AppDataSource.initialize().then(async () => {
    console.log("Banco de Dados Inicializado");

    server.listen(5000, () => {
        console.log("Servidor escutando na porta 5000.");
    })
}).catch(error => console.log(error))
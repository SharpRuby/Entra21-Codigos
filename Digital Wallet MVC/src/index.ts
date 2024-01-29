import express, { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { WalletController } from "./controller/WalletController";

const SERVER_PORT = 3000;
const server = express();
server.use(express.json());

server.post(
  "/wallet/transaction",
  async (request: Request, response: Response) => {
    const walletController = new WalletController();
    const transaction = await walletController.createTransaction(
      request.body.currency,
      request.body.amount,
      request.body.isCredit
    );
    return response.status(201).json(transaction);
  }
);

server.patch(
  "/wallet/transaction",
  async (request: Request, response: Response) => {
    const walletController = new WalletController();
    const newCurrency = await walletController.changeCurrency(
      request.body.currency
    );
    
    return response.status(201).json(newCurrency);
  }
);

server.get(
  "/wallet/statement",
  async (_: Request, response: Response) => {
  const walletController = new WalletController();
  const statement = await walletController.getStatement();
  return response.status(200).json(statement);
});

AppDataSource.initialize()
  .then(async () => {
    console.log("Banco de dados inicializado...");
    server.listen(SERVER_PORT, () => {
      console.log(`Servidor executando na porta ${SERVER_PORT}`);
    });
  })
  .catch((error) => console.log(error)); 
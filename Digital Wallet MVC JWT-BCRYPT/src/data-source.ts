import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./model/User";
import { WalletTransaction } from "./model/WalletTransaction";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Senac@2021",
  database: "DigitalWallet",
  synchronize: true,
  logging: false,
  entities: [User, WalletTransaction],
  migrations: [],
  subscribers: [],
});

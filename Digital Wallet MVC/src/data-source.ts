import "reflect-metadata"
import { DataSource } from "typeorm"
import { WalletTransaction } from "./model/WalletTransaction";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Senac@2021",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [WalletTransaction],
    migrations: [],
    subscribers: [],
})
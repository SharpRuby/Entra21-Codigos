import "reflect-metadata"
import { DataSource } from "typeorm"
import { Imoveis, Pessoas } from "./entity/Dados"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Senac@2021",
    database: "Controle_Condominio",
    synchronize: true,
    logging: false,
    entities: [Pessoas, Imoveis],
    migrations: [],
    subscribers: [],
})

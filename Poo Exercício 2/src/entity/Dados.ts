import { Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class Pessoas {
    @PrimaryGeneratedColumn()
    id: number; 
    @Column()
    nomePessoa: string;
    @Column()
    datadeNascimento: Date;  
    @Column()
    email: string; 
}

@Entity()
export class Imoveis {
    @PrimaryGeneratedColumn()
    id: number; 
    @Column()
    nomeImovel: string;
    @Column()
    morador: Pessoas;  
}

@Entity()
export class Fatura {
    @PrimaryGeneratedColumn()
    id: number; 
    @Column()
    valor: string;
    @Column()
    data: string;  
    @Column()
    imovel: Imoveis; 
    @Column()
    estadoPagamento: boolean; 
}

@Entity()
export class Condominio {
    @PrimaryGeneratedColumn()
    id: number; 
    @Column()
    nome: string; 
    @Column()
    avaliacao: string; 
    @Column()
    imoveis: Imoveis; 
}

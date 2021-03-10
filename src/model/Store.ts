import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid} from 'uuid';

@Entity("Store")
class Store {

    @PrimaryColumn()
    readonly id: string;

    //importar chave : ID_Dono
    //relação (1-n)

    @Column()
    email: string;

    @Column()
    telefone: number;

    @Column()
    cep: number;

    @Column()
    estado: string;

    @Column()
    cidade: string;

    @Column()
    bairro: string;

    @Column()
    endereço: string;

    @Column()
    numero: string;

    @Column()
    complemento: string;

    @Column()
    cnpj: number;

    @Column()
    razao_social: string;

    @Column()
    nome_fantasia: string;

    constructor(){
        if(!this.id)
            this.id = uuid();
    }
}

export { Store };
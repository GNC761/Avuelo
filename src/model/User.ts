import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid} from 'uuid';

@Entity("User")
class User {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column()
    cep: number;

    @Column()
    estado: string;

    @Column()
    cidade: string;

    @Column()
    bairro: string;

    @Column()
    numero: string;

    @Column()
    complemento: string;

    @Column()
    email_pessoal: string;

    @Column()
    telefone_pessoal: number;

    
    constructor(){
        if(!this.id)
            this.id = uuid();
    }
}

export { User };
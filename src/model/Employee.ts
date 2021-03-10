import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid} from 'uuid';

@Entity("Employee")
class Employee {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    cpf: number;

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
    email: string;

    @Column()
    telefone: number;

    
    constructor(){
        if(!this.id)
            this.id = uuid();
    }
}

export { Employee };
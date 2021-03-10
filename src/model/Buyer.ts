import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("Buyer")
class Buyer {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    cpf: number;

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

    constructor(){
        if(!this.id)
            this.id = uuid();
    }
}

export { Buyer };
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid} from 'uuid';
import { User } from "./User";

@Entity("Store")
class Store {

    @PrimaryColumn()
    readonly id: string;

    //FK dono da loja
    @JoinColumn({ name: "id_dono"})
    @ManyToOne( () => User)
    user: User;

    @Column()
    id_dono: string

    @Column()
    razao_social: string;

    @Column()
    nome_fantasia: string;

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
    numero: string;

    @Column()
    complemento: string;

    @Column()
    cnpj: number;

    constructor(){
        if(!this.id)
            this.id = uuid();
    }
}

export { Store };
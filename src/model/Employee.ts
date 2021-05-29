import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid} from 'uuid';
import { Store } from "./Store";

@Entity("Employee")
class Employee {

    @PrimaryColumn()
    readonly id: string;

    @JoinColumn({ name: "id_loja"})
    @ManyToOne(() => Store)
    store: Store

    @Column()
    id_loja: string

    @Column()
    name: string;

    @Column()
    cpf: string;

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
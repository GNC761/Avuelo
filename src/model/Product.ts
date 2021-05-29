import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid} from 'uuid';
import { Store } from "./Store";

@Entity("Product")
class Product {

    @PrimaryColumn()
    readonly id: string;

    @JoinColumn({ name: "id_loja" })
    @ManyToOne(() => Store)
    store: Store

    @Column()
    id_loja: string
    
    @Column()
    categoria: string;

    @Column()
    genero: string;

    @Column()
    descrição: string;

    @Column()
    cor: string;

    @Column()
    tamanho: string;

    @Column()
    largura: string;

    @Column()
    altura: string;

    @Column()
    material: string;

    @Column()
    preço_custo: number;

    @Column()
    preço_venda: number;

    @Column()
    estoque: number;

    @Column()
    codigo: string;
    
    constructor(){
        if(!this.id)
            this.id = uuid();
    }
}

export { Product };
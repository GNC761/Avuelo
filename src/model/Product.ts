import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid} from 'uuid';

@Entity("Product")
class Product {

    @PrimaryColumn()
    readonly id: string;

    //importar chave : ID_Loja
    //relação (n-1)

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
    codigo: string;
    
    constructor(){
        if(!this.id)
            this.id = uuid();
    }
}

export { Product };
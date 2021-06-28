import { getCustomRepository, Repository } from "typeorm"
import { Product } from "../model/Product";
import { ProductRepository } from "../repository/ProductRepository";


interface Iproductservice{
    id_loja: string,
    categoria: string,
    genero: string,
    descrição: string,
    cor: string,
    tamanho: string,
    largura: string,
    altura: string,
    material: string,
    preço_custo: number,
    preço_venda: number,
    estoque: number,
}
class ProductService{
    private productrepository: Repository<Product>;

    constructor(){
        this.productrepository = getCustomRepository(ProductRepository);
    }

    async create({ id_loja, categoria, genero, descrição, cor, tamanho, largura, 
    altura, material, preço_custo, preço_venda, estoque }: Iproductservice){

    const product = this.productrepository.create({ id_loja, categoria, genero, descrição, 
    cor, tamanho, largura, altura, material, preço_custo, preço_venda, estoque });

    await this.productrepository.save(product)

    return product;

    }

    // async update({ id_loja, categoria, genero, descrição, cor, tamanho, largura, 
    //     altura, material, preço_custo, preço_venda, estoque }:Iproductservice) {

    //         const product = await this.productrepository
    //         .createQueryBuilder()
    //         .update(Product)
    //         .set({ id_loja, categoria, genero, descrição, cor, tamanho, largura, 
    //             altura, material, preço_custo, preço_venda, estoque })
    //         .where("id = :id", { id: product_id })
    //         .execute();
    
    //         return product;
    // }

}

export { ProductService }
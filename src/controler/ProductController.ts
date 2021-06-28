import { Request, Response } from 'express';
import { getCustomRepository } from "typeorm";
import { ProductRepository } from '../repository/ProductRepository';
import { ProductService } from '../services/ProductService'
import { StoreService } from '../services/StoreService';

class ProductController{
    async create (request: Request, response: Response){
        const { categoria, genero, descrição, cor, tamanho, largura, altura,
        material, preço_custo, preço_venda, estoque } = request.body;

        const cnpj = request.params;

        const productservice = new ProductService();
        const storeservice = new StoreService();
        
        try{
            const store = await storeservice.findByCNPJ( cnpj );
            const id_loja = store.id;

            const product = await productservice.create({ id_loja, categoria, genero, descrição, cor,
            tamanho, largura, altura, material, preço_custo, preço_venda, estoque });

            return response.status(201).json({ product });
        }catch(err){
            return response.status(400).json({
                message: err.message,
            });
        }
    }

    async show (request: Request, response: Response){
        const productrepository = getCustomRepository(ProductRepository);

        const all = await productrepository.find();

        return response.json(all);
    }

    // async update( request: Request, response: Response){
    //     const productservice = new ProductService();

    //     const { categoria, genero, descrição, cor, tamanho, largura, altura,
    //         material, preço_custo, preço_venda, estoque } = request.body;
    //     const { CNPJ } = request.params;

    //     try{
    //         const service = await productservice.find( CNPJ );
    //         const product_id = service.id;
    //         const cnpj = service.cnpj;

    //         const product = await productservice.update({ categoria, genero, descrição, cor, tamanho, largura, altura,
    //             material, preço_custo, preço_venda, estoque });

    //         return response.status(200).json({ message: product });

    //     }catch(err){
    //         return response.status(400).json({ 
    //             message: err.message
    //         });
    //     }
    // }

    async delete (request: Request, response: Response){
        const productrepository = getCustomRepository(ProductRepository);
        const productservice = new ProductService();

        const { id } = request.params;

        try{
            const product = await productrepository.findOne( id );

            await productrepository.delete(product);

            return response.status(200).json({ message: "Produto deletado com sucesso. "});
        }catch(err){
            return response.status(400).json({
                message: err.message
            });
        }
    }
}

 export { ProductController };
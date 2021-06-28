import { json, Request, Response } from 'express'
import { getCustomRepository } from "typeorm";
import { StoreRepository } from '../repository/StoreRespository';
import { StoreService } from '../services/StoreService';
import { UserService } from '../services/UserService';

class StoreController{
    async create (request: Request, response: Response){
        const { email_pessoal, email, telefone, cep, estado, cidade, bairro, 
        numero, complemento, cnpj, razao_social, nome_fantasia } = request.body;

        const storeservice = new StoreService();
        const userservice = new UserService();
        
        try{
            const user = await userservice.findByEmail( email_pessoal );
            const id_dono = user.id;            

            const Store = await storeservice.create({ id_dono, email, telefone, cep, estado, cidade, bairro, 
            numero, complemento, cnpj, razao_social, nome_fantasia });

            return response.status(201).json(Store);
        }catch(err){
            return response.status(400).json({
                message: err.message,
            });
        }
    }

    async findByCNPJ( request: Request, response: Response ){
        const storeservice = new StoreService();

        const cnpj = request.params;

        try{
            const store = await storeservice.findByCNPJ( cnpj );

            return response.status(200).json({ store });
        }catch(err){
            return response.status(400).json({
                message: err.message
            });
        }
    }

    async show (request:Request, response:Response){
        const Storerepository = getCustomRepository(StoreRepository);

        const all = await Storerepository.find();

        return response.json(all);
    }

    async update (request:Request, response:Response){
        const storeservice = new StoreService();

        const { email, telefone, cep, estado, cidade, bairro, 
        numero, complemento, razao_social, nome_fantasia } = request.body;
        const { CNPJ } = request.params;

        try{
            const service = await storeservice.findByCNPJ( CNPJ );
            const store_id = service.id;
            const cnpj = service.cnpj;

            const store = await storeservice.update({ store_id, email, telefone, cep, estado, 
            cidade, bairro, numero, complemento, cnpj, razao_social, nome_fantasia });

            return response.status(200).json({ message: store });

        }catch(err){
            return response.status(400).json({ 
                message: err.message
            });
        }
    }

    async delete( request:Request, response:Response){
        const storerepository = getCustomRepository(StoreRepository);
        const storeservice = new StoreService();

        const { cnpj } = request.params;

        try{
            const store = await storeservice.findByCNPJ( cnpj );

            await storerepository.delete( store );

            return response.status(200).json({ message: "Loja deletada com sucesso"});
        }catch(err){
            return response.status(400).json({
                message: err.message
            });
        }
    }
}

export {StoreController};
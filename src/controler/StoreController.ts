import { json, Request, Response } from 'express'
import { getCustomRepository } from "typeorm";
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

    // async show (request:Request, response:Response){
    //     const Storerepository = getCustomRepository(StoreRepository);

    //     const all = await Storerepository.find();

    //     return response.json(all);
    // }

}

export {StoreController};
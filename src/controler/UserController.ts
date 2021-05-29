import { Request, Response } from 'express'
import { getCustomRepository } from "typeorm";
import { UserRepository } from '../repository/UserRepository'
import { UserService } from '../services/UserService';


class UserController{
    async create (request: Request, response: Response){

        const { name, cpf, cep, estado, cidade, bairro, numero, 
        complemento, email_pessoal, telefone_pessoal } = request.body;

        const userservice = new UserService();
        
        try{
            const user = await userservice.create({name, cpf, cep, estado, cidade, bairro, numero,
            complemento, email_pessoal, telefone_pessoal });

            return response.status(201).json({ user });
        }catch(err){
            return response.status(400).json({
                message: err.message,
            });
        }
    }

    async findByEmail( request: Request, response: Response){
        const userservice = new UserService();

        const { email } = request.params;

        try{
            const userExists = await userservice.findByEmail( email );

            return response.status(201).json({ userExists });
        }catch(err){
            return response.status(400).json({
                message: err.message,
            });
        }
    }

    // async show (request:Request, response:Response){
    //     const Userrepository = getCustomRepository(UserRepository);

    //     const all = await Userrepository.find();

    //     return response.json(all);
    // }

}

export {UserController};
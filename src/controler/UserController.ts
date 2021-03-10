// import { Request, Response } from 'express'
// import { getCustomRepository } from "typeorm";
// import { UserRepository } from '../repository/UserRepository'

// class UserController{
//     async create (request: Request, response: Response){
//         //const { title, description } = request.body;

//         const Userrepository = getCustomRepository(UserRepository);

//         const User = Userrepository.create({
//             //title, description
//         });

//         await Userrepository.save(User);

//         return response.status(201).json(User);
//     }

//     async show (request:Request, response:Response){
//         const Userrepository = getCustomRepository(UserRepository);

//         const all = await Userrepository.find();

//         return response.json(all);
//     }

// }

// export {UserController};
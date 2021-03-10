// import { Request, Response } from 'express'
// import { getCustomRepository } from "typeorm";
// import { StoreRepository } from '../repository/StoreRespository'

// class StoreController{
//     async create (request: Request, response: Response){
//         //const { title, description } = request.body;

//         const Storerepository = getCustomRepository(StoreRepository);

//         const Store = Storerepository.create({
//             //title, description
//         });

//         await Storerepository.save(Store);

//         return response.status(201).json(Store);
//     }

//     async show (request:Request, response:Response){
//         const Storerepository = getCustomRepository(StoreRepository);

//         const all = await Storerepository.find();

//         return response.json(all);
//     }

// }

// export {StoreController};
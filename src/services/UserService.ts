import { DeepPartial, EntityRepository, getCustomRepository, Repository } from "typeorm"
import { User } from "../model/User"
import { UserRepository } from "../repository/UserRepository"

interface IUserService {
    name: string;
    cpf: string;
    cep: number;
    estado: string;
    cidade: string;
    bairro: string;
    numero: string;
    complemento: string;
    email_pessoal: string;
    telefone_pessoal: number;
}

class UserService {
    private Userrepository: Repository<User>

    constructor() {
        this.Userrepository = getCustomRepository(UserRepository);
    }

    async create({ name, cpf, cep, estado, cidade, bairro, numero,
        complemento, email_pessoal, telefone_pessoal}: IUserService) {
        
        //Verificar se o usuario existe
        const AlreadyExists = await this.Userrepository.findOne({ cpf });

        //Se existir, retornar
        if (AlreadyExists){
            throw new Error("Usuario já existente");
        }
        //Se não, salvar
        else{
        const user = this.Userrepository.create({ name, cpf, cep, estado, cidade, bairro, numero,
            complemento, email_pessoal, telefone_pessoal });

        await this.Userrepository.save(user);
        
        return user;

        }
    }

    async findByEmail( email_pessoal: string ){
        const exists = await this.Userrepository.findOne({ email_pessoal });

        if( !exists ){
            throw new Error("Insira um email valido");
        }else{
            return exists;
        }
    }
}

export { UserService }
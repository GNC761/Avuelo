import { response } from "express";
import { DeepPartial, EntityRepository, getCustomRepository, Repository } from "typeorm"
import { Store } from "../model/Store";
import { StoreRepository } from "../repository/StoreRespository";

interface IStoreService{
    id_dono: string,
    email: string,
    telefone: number,
    cep: number,
    estado: string,
    cidade: string,
    bairro: string,
    numero: string,
    complemento: string,
    cnpj: number,
    razao_social: string,
    nome_fantasia: string
}


class StoreService {
    private Storerepository: Repository<Store>

    constructor() {
        this.Storerepository = getCustomRepository(StoreRepository);
    }

    async create({ id_dono, email, telefone, cep, estado, cidade, bairro, 
    numero, complemento, cnpj, razao_social, nome_fantasia }: IStoreService) {
        
        //verifica se alguma loja ja foi registrada com esse email
        const existe = await this.Storerepository.findOne({ email });

        //se existir retorna um erro
        if (existe){
            throw new Error("Já existe uma loja registrada com esse email");
        }
        //se não salva a nova loja
        else {
            const store = this.Storerepository.create({ id_dono, email, telefone, cep, estado, cidade, 
            bairro, numero, complemento, cnpj, razao_social, nome_fantasia });

            await this.Storerepository.save(store);

            return store;
        }
    }
}

export { StoreService };
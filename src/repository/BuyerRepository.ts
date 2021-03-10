import { EntityRepository, Repository } from "typeorm";
import { Buyer } from "../model/Buyer";

@EntityRepository(Buyer)
class BuyerRepository extends Repository<Buyer> {}

export { BuyerRepository };
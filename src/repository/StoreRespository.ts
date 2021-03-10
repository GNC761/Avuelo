import { EntityRepository, Repository } from "typeorm";
import { Store } from "../model/Store";

@EntityRepository(Store)
class StoreRepository extends Repository<Store> {}

export { StoreRepository };
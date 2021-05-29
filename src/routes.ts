import { Router } from 'express';

import { BuyerController } from './controler/BuyerController';
import { EmployeeController } from './controler/EmployeeController';
import { ProductController } from './controler/ProductController';
import { StoreController } from './controler/StoreController';
import { UserController } from './controler/UserController';


const router = Router();

const buyerController = new BuyerController();
const employeeController = new EmployeeController();
const productController = new ProductController();
const storeController = new StoreController();
const userController = new UserController();


router.post("/Store", storeController.create);

router.post("/User", userController.create);
router.post("/SearchUser/:email", userController.findByEmail);

export { router };

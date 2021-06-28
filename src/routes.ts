import { Router } from 'express';

import { BuyerController } from './controler/BuyerController';
import { EmployeeController } from './controler/EmployeeController';
import { ProductController } from './controler/ProductController'
import { StoreController } from './controler/StoreController';
import { UserController } from './controler/UserController';


const router = Router();

//const buyerController = new BuyerController();
//const employeeController = new EmployeeController();
const productController = new ProductController();
const storeController = new StoreController();
const userController = new UserController();

router.post("/product/:cnpj", productController.create);
router.get("/product/:cnpj/all", productController.show);
//router.get("/product/serch/:codigo", productController.find);
//router.put("/product/update/:cnpj", productController.update);
router.delete("/product/:id", productController.delete);

router.post("/store", storeController.create);
router.get("/store/search/:cnpj", storeController.findByCNPJ);
router.put("/store/update/:cnpj", storeController.update);
router.get("/store/all", storeController.show);
router.delete("/store/delete/:cnpj", storeController.delete);

router.post("/user", userController.create);
router.get("/user/search/:email", userController.findByEmail);
router.get("/user/all", userController.show);
router.put("/user/update/:email", userController.update);
router.delete("/user/delete/:email", userController.delete);

export { router };

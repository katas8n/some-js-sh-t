import { Router } from 'express';
import * as productController from '../controllers/productController';

export const productRouter = Router();

productRouter.get('/', productController.getAllProducts);
// router.post()
// router.put()
// router.delete()

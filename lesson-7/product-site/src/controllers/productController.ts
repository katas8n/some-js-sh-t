import { Request, Response } from 'express';
import { ProductService } from '../services/productServices';

export const getAllProducts = async (req: Request, res: Response) => {
    console.log(+req.query.price);
    const products = await ProductService.getProducts();
    res.json(products);
};

// TODO : CRUD opertaions according to the shit we've made above;

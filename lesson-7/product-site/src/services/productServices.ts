import { ProductDAO } from '../dao/dao';
import { Product } from '../models/product';

export class ProductService {
    static getProducts(): Promise<Product[]> {
        return ProductDAO.getProducts();
    }
    static getProductById(id): Promise<Product> {
        return ProductDAO.getProductById(id);
    }
    static createProduct(name, price, category) {
        ProductDAO.createProduct(name, price, category);
    }
    static updateProduct(id, name, price, category) {
        ProductDAO.updateProduct(id, name, price, category);
    }
    static deleteProduct(id) {
        ProductDAO.deleteProduct(id);
    }
}

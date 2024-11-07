import { log } from 'console';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

const DAOPromises = open({
    filename: '../../database.sqlite',
    driver: sqlite3.Database
});

export async function initializeDatabase() {
    const db = await DAOPromises;
    await db.exec(`
        CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, price REAL NOT NULL, category TEXT NOT NULL)
    `);
    log('here we are');
}

export class ProductDAO {
    static async getProducts() {
        const db = await DAOPromises;
        return await db.all('SELECT * FROM products');
    }
    static async getProductById(id) {
        const db = await DAOPromises;
        return await db.get('SELECT * FROM products WHERE id=?', [id]);
    }
    static async createProduct(name, price, category) {
        const db = await DAOPromises;
        return await db.run(
            'INSERT INTO products(name, price, category) VALUES (?, ?, ?)',
            [name, price, category]
        );
    }
    static async updateProduct(name, price, category, id) {
        const db = await DAOPromises;
        return await db.run(
            'UPDATE products SET name=?, price=?, category=? WHERE id=?',
            [name, price, category, id]
        );
    }
    static async deleteProduct(id) {
        const db = await DAOPromises;
        return await db.run('DELETE FROM products WHERE id=?', [id]);
    }
}

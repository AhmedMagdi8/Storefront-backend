"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const database_1 = __importDefault(require("../database"));
class Product {
    async index() {
        const conn = await database_1.default.connect();
        const sql = 'SELECT * FROM products';
        try {
            const result = await conn.query(sql);
            conn.release();
            if (result.rows.length >= 0) {
                const products = result.rows;
                return products;
            }
        }
        catch (err) {
            throw new Error('getting products failed');
        }
        return null;
    }
    async show(id) {
        const conn = await database_1.default.connect();
        const sql = 'SELECT * FROM PRODUCTS where id = $1';
        try {
            const result = await conn.query(sql, [id]);
            conn.release();
            if (result.rows.length) {
                const product = result.rows[0];
                return product;
            }
        }
        catch (err) {
            throw new Error('getting product failed');
        }
        return null;
    }
    async createProduct(name, price, category) {
        const conn = await database_1.default.connect();
        const sql = 'INSERT INTO products (name, price, category) VALUES($1,$2,$3)';
        try {
            await conn.query(sql, [name, price, category]);
            conn.release();
            return "success";
        }
        catch (err) {
            throw new Error("Adding product failed");
        }
    }
    async deleteProducts() {
        const conn = await database_1.default.connect();
        const sql = 'DELETE FROM products';
        try {
            await conn.query(sql);
        }
        catch (err) {
            throw new Error("Deleting products failed");
        }
        return "DELETED SUCCESSFULLY";
    }
}
exports.Product = Product;

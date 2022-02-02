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
        const result = await conn.query(sql);
        if (result.rows.length >= 0) {
            const products = result.rows;
            return products;
        }
        return null;
    }
    async show(id) {
        const conn = await database_1.default.connect();
        const sql = 'SELECT * FROM products where id = $1';
        const result = await conn.query(sql, [id]);
        if (result.rows.length) {
            const product = result.rows[0];
            return product;
        }
        return null;
    }
    async createProduct(name, price, category) {
        const conn = await database_1.default.connect();
        const sql = 'INSERT INTO products (name, price, category) VALUES($1,$2,$3)';
        try {
            await conn.query(sql, [name, price, category]);
            return "success";
        }
        catch (err) {
            throw new Error("Adding product failed");
        }
    }
    async deleteProducts() {
        const conn = await database_1.default.connect();
        const sql = 'DELETE FROM products';
        await conn.query(sql);
        return "DELETED SUCCESSFULLY";
    }
}
exports.Product = Product;

import Client from '../database';

import {Product} from './product';

export type order = {
    user_id:number,
    status:string, 
    quantity:number
};

export class Order {

    async index(): Promise<order[]|null> {
        const conn = await Client.connect();
        const sql = 'SELECT * FROM orders';

        const result = await conn.query(sql);
        return result.rows;

    }

    async show(user_id:number): Promise<order[]|null> {
        const conn = await Client.connect();
        const sql = 'SELECT * FROM orders WHERE user_id = $1';

        const result = await conn.query(sql,[user_id]);
        return result.rows;
    }

    async createOrder(user_id:number, status: string): Promise<string|null> {
        const conn = await Client.connect();
        const sql = 'INSERT INTO orders(user_id,status) VALUES ($1,$2)';

        try {
            await conn.query(sql,[user_id,status]);
            return "order created successfully";
        } catch (err) {
            return null;
        }
    }
    async addProduct(order_id:number,product_id:number,quantity: number): Promise<string|null> {
        const conn = await Client.connect();
        const sql = 'INSERT INTO order_products (order_id,product_id,quantity) values($1,$2,$3)';

        try {
            await conn.query(sql,[order_id,product_id,quantity]);
            return "product added to the order successfully";
        } catch (err) {
            return null;
        }
    }

    async getOrderProducts(order_id:number) : Promise<Product[]|null> {
        const conn = await Client.connect();
        const sql = 'SELECT orders.status, orders.user_id, order_products.product_id, order_products.order_id,order_products.quantity FROM orders join order_products on orders.id = order_products.order_id where orders.id = $1';

        try {
            const result = await conn.query(sql,[order_id]);
            return result.rows;
        } catch (err) {
            return null;
        }

    }
    async deleteOrders(): Promise<string> {
        const conn = await Client.connect();
        const sql = 'DELETE FROM orders';
        await conn.query(sql);
        return "deleted successfully";
    }

}
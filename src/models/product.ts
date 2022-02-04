import Client from '../database';


export type product = {
    id: number,
    name: string,
    price: number,
    category: string
}

export class Product {

    async index(): Promise<product[] | null> {
        const conn = await Client.connect();
        const sql = 'SELECT * FROM products';

        try {
            const result = await conn.query(sql);
            conn.release();

            if (result.rows.length >= 0) {
                const products = result.rows;
                return products;
            }
        } catch (err) {
            throw new Error('getting products failed');
        }
        return null;
    }

    async show(id: number): Promise<product | null> {
        const conn = await Client.connect();
        const sql = 'SELECT * FROM PRODUCTS where id = $1';
        try {
            const result = await conn.query(sql, [id]);
            conn.release();

            if (result.rows.length) {
                const product = result.rows[0];
                
                return product;
            }
        } catch (err) {
            throw new Error('getting product failed');
        }
        return null;
    }

    async createProduct(name: string, price: number, category: string): Promise<string | null> {
        const conn = await Client.connect();
        const sql = 'INSERT INTO products (name, price, category) VALUES($1,$2,$3)';

        try {
            await conn.query(sql, [name, price, category]);
            conn.release();

            return "success"
        } catch (err) {
            throw new Error("Adding product failed");
        }

    }

    async deleteProducts() {
        const conn = await Client.connect();
        const sql = 'DELETE FROM products';

        try {
            await conn.query(sql);
        } catch (err) {
            throw new Error("Deleting products failed");
        }
        return "DELETED SUCCESSFULLY"
    }
}
import Client from '../database';


export type product = {
    id : number,
    name : string,
    price : number,
    category : string
}

export class Product {

    async index() : Promise<product[]|null> {
        const conn = await Client.connect();
        const sql = 'SELECT * FROM products';

        const result = await conn.query(sql);

        if(result.rows.length >= 0) {
            const products = result.rows;
            return products;
        }
        return null;
    }
    
    async show(id:number) : Promise<product|null> {
        const conn = await Client.connect();
        const sql = 'SELECT * FROM products where id = $1';

        const result = await conn.query(sql,[id]);
                
        if(result.rows.length) {
            const product = result.rows[0];
            return product;
        }
        return null;
    }

    async createProduct(name:string, price:number, category:string) : Promise<string|null> {
        const conn = await Client.connect();
        const sql = 'INSERT INTO products (name, price, category) VALUES($1,$2,$3)';

        try {
            await conn.query(sql, [name, price, category]);
            return "success"
        } catch (err) {
            throw new Error("Adding product failed");
        }

    }

    async deleteProducts() {
        const conn = await Client.connect();
        const sql = 'DELETE FROM products';


        await conn.query(sql);
        
        return "DELETED SUCCESSFULLY"


    }
}
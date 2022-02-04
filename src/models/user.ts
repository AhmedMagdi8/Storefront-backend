import Client from '../database';
import bcrypt from 'bcrypt';

const pepper = process.env.BCRYPT_PASSWORD;
const saltRounds = process.env.SALT_ROUNDS;

export type user = {
    username: string,
    firstname: string,
    lastname : string,
    password_digest: string
};


export class User {

    async index() : Promise<user[]|null> {
        const conn = await Client.connect();
        const sql = 'SELECT * FROM USERS';

        const result = await conn.query(sql);
        

        const users = result.rows;
        return users;
    }

    async show(id:number) : Promise<user|null> {
        const conn = await Client.connect();
        const sql = 'SELECT * FROM USERS WHERE id = $1';

        const result = await conn.query(sql,[id]);

        if(result.rows.length) {
            
            const user = result.rows[0];
            return user;
        }
        return null;
    }

    async createUser(username: string, password: string, firstname:string,lastname:string) : Promise<user|null> {
        const password_digest = bcrypt.hashSync(password+pepper,Number(saltRounds));
        
        const conn = await Client.connect();
        const sql = 'INSERT INTO USERS(username,password,firstname,lastname) VALUES($1,$2,$3,$4) RETURNING *';

        const result = await conn.query(sql,[username,password_digest,firstname,lastname]);
        if(result.rows.length) {
            const user = result.rows[0];
            return user;
        }
        return null;
    }

    async deleteUsers() {
        const conn = await Client.connect();
        const sql = 'DELETE FROM users';

        await conn.query(sql);

        conn.release();
        return "deleted successfully";
    }   

}
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

        try {

            const result = await conn.query(sql);
            conn.release();
            const users = result.rows;
            return users;
        } catch (err) {
            throw new Error('getting user failed');
        }        
    }

    async show(id:number) : Promise<user|null> {
        const conn = await Client.connect();
        const sql = 'SELECT * FROM USERS WHERE id = $1';

        try {
            const result = await conn.query(sql,[id]);
            conn.release();

            if(result.rows.length) {
                const user = result.rows[0];
                return user;
            }
            return null;
        } catch (err) {
            throw new Error('getting user failed')
        }
    }

    async createUser(username: string, password: string, firstname:string,lastname:string) : Promise<user|null> {
        const password_digest = bcrypt.hashSync(password+pepper,Number(saltRounds));
        
        const conn = await Client.connect();
        const sql = 'INSERT INTO USERS(username,password,firstname,lastname) VALUES($1,$2,$3,$4) RETURNING *';

        try {
            const result = await conn.query(sql,[username,password_digest,firstname,lastname]);
            conn.release();

            if(result.rows.length) {
                const user = result.rows[0];
                return user;
            }
        } catch (err) {
            throw new Error('creating a user failed');
        }
        return null;
    }

    async deleteUsers() {
        const conn = await Client.connect();
        const sql = 'DELETE FROM users';
        try {
            await conn.query(sql);
            conn.release();
            return "deleted successfully";
        } catch (err) {
            throw new Error('deleting users failed');
        }
    }   

}
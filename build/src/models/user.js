"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const pepper = process.env.BCRYPT_PASSWORD;
const saltRounds = process.env.SALT_ROUNDS;
class User {
    async index() {
        const conn = await database_1.default.connect();
        const sql = 'SELECT * FROM USERS';
        const result = await conn.query(sql);
        const users = result.rows;
        return users;
    }
    async show(id) {
        const conn = await database_1.default.connect();
        const sql = 'SELECT * FROM USERS WHERE id = $1';
        const result = await conn.query(sql, [id]);
        if (result.rows.length) {
            const user = result.rows[0];
            return user;
        }
        return null;
    }
    async createUser(username, password, firstname, lastname) {
        const password_digest = bcrypt_1.default.hashSync(password + pepper, Number(saltRounds));
        const conn = await database_1.default.connect();
        const sql = 'INSERT INTO USERS(username,password,firstname,lastname) VALUES($1,$2,$3,$4) RETURNING *';
        const result = await conn.query(sql, [username, password_digest, firstname, lastname]);
        if (result.rows.length) {
            const user = result.rows[0];
            return user;
        }
        return null;
    }
    async deleteUsers() {
        const conn = await database_1.default.connect();
        const sql = 'DELETE FROM users';
        await conn.query(sql);
        conn.release();
        return "deleted successfully";
    }
}
exports.User = User;

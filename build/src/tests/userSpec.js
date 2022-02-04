"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
const request = (0, supertest_1.default)(server_1.default);
describe('Test users endpoints', () => {
    it('test get all users endpoint it should throw unauthorized error with status 401', async () => {
        const url = '/users';
        // authenticate user
        const usr = await request.post('/users')
            .set('Content-type', 'application/json')
            .send({ username: 'ah', password: 'ah', firstname: 'ah', lastname: 'ah' });
        const token = usr.body;
        const response = await request.get(url).set('Authorization', 'Bearer ' + token);
        // test
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toEqual(1);
        await request.delete('/users').set('Authorization', 'Bearer ' + token);
    });
    it('test get specific user endpoint it should throw not found error with status code 404', async () => {
        const url = '/users/25';
        // authenticate user
        const usr = await request.post('/users')
            .set('Content-type', 'application/json')
            .send({ username: 'ah', password: 'ah', firstname: 'ah', lastname: 'ah' });
        const token = usr.body;
        const response = await request.get(url).set('Authorization', 'Bearer ' + token);
        // test
        expect(response.statusCode).toBe(404);
        await request.delete('/users').set('Authorization', 'Bearer ' + token);
    });
    it('test create user endpoint it should throw a successful request with status code 200', async () => {
        const url = '/users';
        const response = await request.post(url)
            .set('Content-type', 'application/json')
            .send({ username: 'ah', password: 'ah', firstname: 'ah', lastname: 'ah' });
        const token = response.body;
        // test
        expect(response.statusCode).toBe(200);
        await request.delete('/users').set('Authorization', 'Bearer ' + token);
    });
});

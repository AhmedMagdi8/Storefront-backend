"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
const request = (0, supertest_1.default)(server_1.default);
describe('Test orders endpoints', () => {
    it('test get all orders endpoint it should get empty array of orders with status 200', async () => {
        const url = '/orders';
        // authenticate user
        const usr = await request.post('/users')
            .set('Content-type', 'application/json')
            .send({ username: 'ah', password: 'ah', firstname: 'ah', lastname: 'ah' });
        const token = usr.body;
        // make request with token
        const response = await request.get(url).set('Authorization', 'Bearer ' + token);
        // test
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([]);
        // delete user
        await request.delete('/users').set('Authorization', 'Bearer ' + token);
    });
    it('test get specific user orders endpoint it should get empty array of orders', async () => {
        const url = '/orders/1';
        // authenticate user
        const usr = await request.post('/users')
            .set('Content-type', 'application/json')
            .send({ username: 'ah', password: 'ah', firstname: 'ah', lastname: 'ah' });
        const token = usr.body;
        // make request with token
        const response = await request.get(url).set('Authorization', 'Bearer ' + token);
        // test
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([]);
        await request.delete('/users').set('Authorization', 'Bearer ' + token);
    });
    it('test create order endpoint it should create the order', async () => {
        const url = '/orders/2';
        // authenticate user
        const usr = await request.post('/users')
            .set('Content-type', 'application/json')
            .send({ username: 'ah', password: 'ah', firstname: 'ah', lastname: 'ah' });
        const token = usr.body;
        // make request with token
        const response = await request.get(url).set('Authorization', 'Bearer ' + token).send({ status: "active" });
        // test
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeTruthy();
        await request.delete('/users').set('Authorization', 'Bearer ' + token);
    });
    it('test get order details endpoint it should throw an unauthorized error  with status 401', async () => {
        const url = '/orders/2/2';
        const response = await request.post(url);
        expect(response.statusCode).toBe(401);
    });
    it('test add product to order endpoint it should throw an unauthorized error  with status 401', async () => {
        const url = '/orders/order/2';
        const response = await request.post(url);
        expect(response.statusCode).toBe(401);
    });
});

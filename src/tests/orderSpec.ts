import supertest from 'supertest';
import app from '../server';

const request = supertest(app);

describe('Test orders endpoints', () => {

    it('test get all orders endpoint it should throw unauthorized error with status 401', async() => {
        const url = '/orders';
        const response = await request.get(url);
        expect(response.statusCode).toBe(401);
    });

    it('test get specific user orders endpoint it should throw unauthorized error with status 401', async() => {
        const url = '/orders/1';
        const response = await request.get(url);
        expect(response.statusCode).toBe(401);
    });

    it('test create order endpoint it should throw an unauthorized error with status 401', async() => {
        const url = '/orders/2';
        const response = await request.post(url);
        expect(response.statusCode).toBe(401);
    });

    it('test get order details endpoint it should throw an unauthorized error  with status 401', async() => {
        const url = '/orders/2/2';
        const response = await request.post(url);
        expect(response.statusCode).toBe(401);
    });

    it('test add product to order endpoint it should throw an unauthorized error  with status 401', async() => {
        const url = '/orders/order/2';
        const response = await request.get(url);
        expect(response.statusCode).toBe(401);
    });

})
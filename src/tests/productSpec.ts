import supertest from 'supertest';
import app from '../server';

const request = supertest(app);

describe('Test products endpoints', () => {
    it('test get all products endpoint it should get empty array of products with status 200', async() => {
        const url = '/products';
        const response = await request.get(url);
        expect(response.statusCode).toBe(200);
    });

    it('test get specific product endpoint it should throw not found error with status 404', async() => {
        const url = '/products/55';
        const response = await request.get(url);
        expect(response.statusCode).toBe(404);
    });

    it('test create product endpoint it should throw a authentication error with status 401', async() => {
        const url = '/products';
        const response = await request.post(url);
        expect(response.statusCode).toBe(401);
    });


})
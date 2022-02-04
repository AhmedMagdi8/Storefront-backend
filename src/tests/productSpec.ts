import supertest from 'supertest';
import app from '../server';

const request = supertest(app);

describe('Test products endpoints', () => {
    it('test get all products endpoint it should get empty array of products with status 200', async(done) => {
        const url = '/products';
        const response = await request.get(url);
        expect(response.statusCode).toBe(200);
        done();
    });

    // it('test get specific product endpoint it should throw not found error with status 404', async(done) => {
    //     const url = '/products/50';
    //     const response = await request.get(url);
    //     expect(response.statusCode).toBe(404);
    //     done();
    // });

    it('test create product endpoint it should throw a authentication error with status 401', async(done) => {
        const url = '/products';
        const response = await request.post(url);
        expect(response.statusCode).toBe(401);
        done();
    });


})
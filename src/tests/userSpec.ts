import supertest from 'supertest';
import app from '../server';


const request = supertest(app);

describe('Test users endpoints', () => {
    it('test get all users endpoint it should throw unauthorized error with status 401', async() => {
        const url = '/users';
        const response = await request.get(url);
        expect(response.statusCode).toBe(401);
    });

    it('test get specific user endpoint it should throw unauthorized error with status 401', async() => {
        const url = '/users/1';
        const response = await request.get(url);
        expect(response.statusCode).toBe(401);
    });

    // it('test create user endpoint it should throw a bad request error with status 400', async() => {
    //     const url = '/users';
    //     const response = await request.post(url);
    //     expect(response.statusCode).toBe(400);
    // });
})
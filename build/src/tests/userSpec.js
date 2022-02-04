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
        const response = await request.get(url);
        expect(response.statusCode).toBe(401);
    });
    it('test get specific user endpoint it should throw unauthorized error with status 401', async () => {
        const url = '/users/1';
        const response = await request.get(url);
        expect(response.statusCode).toBe(401);
    });
    // it('test create user endpoint it should throw a bad request error with status 400', async() => {
    //     const url = '/users';
    //     const response = await request.post(url);
    //     expect(response.statusCode).toBe(400);
    // });
});

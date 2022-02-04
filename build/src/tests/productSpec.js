"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
const request = (0, supertest_1.default)(server_1.default);
describe('Test products endpoints', () => {
    it('test get all products endpoint it should get empty array of products with status 200', async () => {
        const url = '/products';
        const response = await request.get(url);
        expect(response.statusCode).toBe(200);
    });
    it('test get specific product endpoint it should throw not found error with status 404', async () => {
        const url = '/products/55';
        const response = await request.get(url);
        expect(response.statusCode).toBe(404);
    });
    it('test create product endpoint it should throw a authentication error with status 401', async () => {
        const url = '/products';
        const response = await request.post(url);
        expect(response.statusCode).toBe(401);
    });
});

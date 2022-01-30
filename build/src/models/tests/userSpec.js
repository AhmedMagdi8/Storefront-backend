"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../user");
const user_ = new user_1.User();
describe("User model", () => {
    it('should have an index function', () => {
        expect(user_.index).toBeDefined();
    });
    it('should have an show user function', () => {
        expect(user_.show).toBeDefined();
    });
    it('should have a createUser function', () => {
        expect(user_.createUser).toBeDefined();
    });
    // it('should get all users', async () => {
    //     await user_.createUser('ahmed','ahmed','ahmed','ahmed');
    //     expect(user_.index()).toEqual([]);
    // })
});

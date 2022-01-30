import { User } from '../user';


const user_ = new User();

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
})
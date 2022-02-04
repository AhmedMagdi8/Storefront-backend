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

    it('should get all users', async () => {
        expect(await user_.index()).toEqual([]);
    });

    it('should create a user', async () => {
        expect(await user_.createUser("test", "hello", "test","test")).not.toEqual({
            username: 'test',
            password_digest: 'test',
            firstname: 'test',
            lastname: 'test'
        });
        await user_.deleteUsers();
    });

    it('should show a specific user', async () => {
        expect(await user_.show(1)).toEqual(null);
    }); 
});
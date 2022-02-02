import { Product } from '../product';


const product = new Product();

describe("Product model", () => {

    it('should have an index function', () => {
        expect(product.index).toBeDefined();
    });

    it('should have an show product function', () => {
        expect(product.show).toBeDefined();
    });

    it('should have a createProduct function', () => {
        expect(product.createProduct).toBeDefined();
    });

    it('should get all products', async () => {
        expect(await product.index()).toEqual([]);
    });

    it('should create a user', async () => {
        expect(await product.createProduct("test", 55, "test")).toEqual("success");
        await product.deleteProducts();
    });

    it('should show a specific user', async () => {
        expect(await product.show(1)).toEqual(null);
    }); 
});
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = require("../order");
const order = new order_1.Order();
describe("order model", () => {
    it('should have an index function', () => {
        expect(order.index).toBeDefined();
    });
    it('should have an show order function', () => {
        expect(order.show).toBeDefined();
    });
    it('should have a createOrder function', () => {
        expect(order.createOrder).toBeDefined();
    });
    it('should get all orders', async () => {
        expect(await order.index()).toEqual([]);
    });
    // it('should create a order', async () => {
    //     expect(await order.createOrder(1,"active")).toEqual("order created successfully");
    //     await order.deleteOrders();
    // });
    it('should show a specific order', async () => {
        expect(await order.show(1)).toEqual([]);
    });
});

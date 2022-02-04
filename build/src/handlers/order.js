"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProductToOrder = exports.createOrder = exports.getOrderdetails = exports.getUserOrders = exports.getAllOrders = void 0;
const order_1 = require("../models/order");
const order = new order_1.Order();
const getAllOrders = async (req, res) => {
    try {
        const orders = await order.index();
        res.json(orders);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.getAllOrders = getAllOrders;
const getUserOrders = async (req, res) => {
    try {
        const userId = Number(req.params.id);
        const orders = await order.show(userId);
        res.json(orders);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.getUserOrders = getUserOrders;
const getOrderdetails = async (req, res) => {
    try {
        const orderId = Number(req.params.id);
        const orders = await order.getOrderProducts(orderId);
        res.json(orders);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.getOrderdetails = getOrderdetails;
const createOrder = async (req, res) => {
    const userId = Number(req.params.id);
    const status = req.body.status;
    try {
        await order.createOrder(userId, status);
        res.status(200).json("successfully created order");
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.createOrder = createOrder;
const addProductToOrder = async (req, res) => {
    const orderId = Number(req.params.orderId);
    const productId = Number(req.params.productId);
    const quantity = Number(req.body.quantity);
    try {
        await order.addProduct(orderId, productId, quantity);
        res.status(200).json("successfully added product to the order");
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.addProductToOrder = addProductToOrder;

import {Request, Response} from 'express';

import {Order} from '../models/order';

const order = new Order();

export const getAllOrders = async (req: Request, res: Response) => {
    try {
        const orders = await order.index();        
        res.json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
} 

export const getUserOrders = async (req: Request, res: Response) => {
    try {
        const userId = Number(req.params.id);
        const orders = await order.show(userId);
        res.json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getOrderdetails = async (req: Request, res: Response) => {
    try {
        const orderId = Number(req.params.id);
        const orders = await order.getOrderProducts(orderId);
        res.json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
}


export const createOrder = async (req: Request, res: Response) => {
    const userId = Number(req.params.id);
    const status = req.body.status;
    // const quantity = req.body.quantity;
    try {
        await order.createOrder(userId, status);
        res.status(200).json("successfully created order");
    } catch (err) {
        res.status(500).json(err);
    }
}

export const addProductToOrder = async (req: Request, res: Response) => {
    const orderId = Number(req.params.orderId);
    const productId = Number(req.params.productId);
    const quantity = Number(req.body.quantity);
    try {
        await order.addProduct(orderId, productId,quantity);
        res.status(200).json("successfully added product to the order");
    } catch (err) {
        res.status(500).json(err);
    }
}

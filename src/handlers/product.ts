import {Request, Response} from 'express';

import {Product} from '../models/product';

const product = new Product();

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await product.index();
        res.json(products);
    } catch (err) {
        res.status(500).json({
            "err": "server error"
        })
    }

};

export const getProduct = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const product_ = await product.show(id);
        res.json(product_);
    } catch (err) {
        res.status(404).json({
            "err": "NOT FOUND!!"
        })
    }
}

export const createProduct = async (req: Request, res: Response) => {
    const name = req.body.name;
    const price = req.body.price;
    const category = req.body.category;

    try {
        await product.createProduct(name, price, category)
        res.json("success");
    } catch (err) {
        console.log(err);
        res.status(500).json("adding product failed")
    }
}
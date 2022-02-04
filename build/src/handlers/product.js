"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = exports.getProduct = exports.getAllProducts = void 0;
const product_1 = require("../models/product");
const product = new product_1.Product();
const getAllProducts = async (req, res) => {
    try {
        const products = await product.index();
        res.json(products);
    }
    catch (err) {
        res.status(500).json({
            "err": "server error"
        });
    }
};
exports.getAllProducts = getAllProducts;
const getProduct = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const product_ = await product.show(id);
        if (!product_) {
            throw new Error('not found');
        }
        res.json(product_);
    }
    catch (err) {
        res.status(404).json("not found");
    }
};
exports.getProduct = getProduct;
const createProduct = async (req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const category = req.body.category;
    try {
        await product.createProduct(name, price, category);
        res.json("Product Added Successfully");
    }
    catch (err) {
        console.log(err);
        res.status(500).json("adding product failed");
    }
};
exports.createProduct = createProduct;

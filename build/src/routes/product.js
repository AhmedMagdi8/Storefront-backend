"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = require("../handlers/product");
const router = (0, express_1.Router)();
router.get('/', product_1.getAllProducts);
router.get('/:id', product_1.getProduct);
router.post('/', product_1.createProduct);
exports.default = router;

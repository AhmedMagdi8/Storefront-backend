"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = __importDefault(require("../middleware/auth-middleware"));
const product_1 = require("../handlers/product");
const router = (0, express_1.Router)();
router.get('/', product_1.getAllProducts);
router.get('/:id', product_1.getProduct);
router.post('/', auth_middleware_1.default, product_1.createProduct);
exports.default = router;

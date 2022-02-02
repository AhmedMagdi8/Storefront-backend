"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = __importDefault(require("../middleware/auth-middleware"));
const order_1 = require("../handlers/order");
const router = (0, express_1.Router)();
router.get('/', auth_middleware_1.default, order_1.getAllOrders);
router.get('/:id', auth_middleware_1.default, order_1.getUserOrders);
router.get('/order/:id', auth_middleware_1.default, order_1.getOrderdetails);
router.post('/:orderId/:productId', auth_middleware_1.default, order_1.addProductToOrder);
router.post('/:id', auth_middleware_1.default, order_1.createOrder);
exports.default = router;

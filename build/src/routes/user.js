"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = __importDefault(require("../middleware/auth-middleware"));
const user_1 = require("../handlers/user");
const router = (0, express_1.Router)();
router.get('/', auth_middleware_1.default, user_1.getAllUsers);
router.get('/:id', auth_middleware_1.default, user_1.getUser);
router.post('/', auth_middleware_1.default, user_1.createUser);
exports.default = router;

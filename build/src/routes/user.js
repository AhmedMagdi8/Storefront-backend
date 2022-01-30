"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../handlers/user");
const router = (0, express_1.Router)();
router.get('/', user_1.getAllUsers);
router.get('/:id', user_1.getUser);
router.post('/', user_1.createUser);
exports.default = router;

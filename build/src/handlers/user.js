"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUser = exports.getAllUsers = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = require("../models/user");
const user = new user_1.User();
const getAllUsers = async (req, res) => {
    try {
        const users = await user.index();
        res.json(users);
    }
    catch (err) {
        res.status(500).json("server error");
    }
};
exports.getAllUsers = getAllUsers;
const getUser = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const user_ = await user.show(id);
        res.json(user_);
    }
    catch (err) {
        res.status(404).json({
            "err": "NOT FOUND!!"
        });
    }
};
exports.getUser = getUser;
const createUser = async (req, res) => {
    const username = req.body.username;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const password = req.body.password;
    try {
        const user_ = await user.createUser(username, password, firstname, lastname);
        if (!user) {
            throw new Error('bad request');
        }
        const token = jsonwebtoken_1.default.sign({ user: user_ }, String(process.env.TOKEN_SECRET));
        res.json(token);
    }
    catch (err) {
        res.status(400).json("bad request");
    }
};
exports.createUser = createUser;

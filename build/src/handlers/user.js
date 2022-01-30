"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUser = exports.getAllUsers = void 0;
const user_1 = require("../models/user");
const user = new user_1.User();
const getAllUsers = async (req, res) => {
    try {
        const users = await user.index();
        res.json(users);
    }
    catch (err) {
        res.status(500).json({
            "err": "server error"
        });
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
    console.log(req.body);
    const username = req.body.username;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const password = req.body.password;
    try {
        await user.createUser(username, password, firstname, lastname);
        res.json("success");
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            "err": "SERVER ERROR"
        });
    }
};
exports.createUser = createUser;

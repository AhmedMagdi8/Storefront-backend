"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function auth(req, res, next) {
    const authHeader = req.headers.authorization;
    try {
        if (authHeader) {
            const decodedToken = authHeader.split(' ')[1];
            jsonwebtoken_1.default.verify(decodedToken, String(process.env.TOKEN_SECRET));
        }
        else {
            throw new Error('not authenticated');
        }
        next();
    }
    catch (err) {
        res.status(401);
        res.json('Access denied, invalid token');
    }
}
exports.default = auth;

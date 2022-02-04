import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';

import {User} from '../models/user';

const user = new User();

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await user.index();
        res.json(users);
    } catch (err) {
        res.status(500).json("server error");
    }

};

export const getUser = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const user_ = await user.show(id);
        res.json(user_);
    } catch (err) {
        res.status(404).json({
            "err": "NOT FOUND!!"
        })
    }
}

export const createUser = async (req: Request, res: Response) => {
    
    const username = req.body.username;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const password = req.body.password;

    try {
        const  user_ = await user.createUser(username,password,firstname,lastname);
        if(!user) {
            throw new Error('bad request');
        }
        const token = jwt.sign({ user: user_ }, String(process.env.TOKEN_SECRET));
        res.json(token);
    } catch (err) {        
        res.status(400).json("bad request")
    }
}
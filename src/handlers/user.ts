import {Request, Response} from 'express';

import {User} from '../models/user';

const user = new User();

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await user.index();
        res.json(users);
    } catch (err) {
        res.status(500).json({
            "err": "server error"
        })
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
    console.log(req.body)
    const username = req.body.username;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const password = req.body.password;

    try {
        await user.createUser(username,password,firstname,lastname);
        res.json("success");
    } catch (err) {
        console.log(err);
        
        res.status(500).json({
            "err": "SERVER ERROR"
        })
    }
}
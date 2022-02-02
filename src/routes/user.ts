import { Router } from "express";

import isAuth from '../middleware/auth-middleware';

import {getAllUsers, getUser, createUser} from '../handlers/user';


const router: Router = Router();

router.get('/', isAuth, getAllUsers);
router.get('/:id', isAuth, getUser);
router.post('/', isAuth, createUser);  


export default router;
import { Router } from "express";

import isAuth from '../middleware/auth-middleware';

import {getAllUsers, getUser, createUser, deleteUsers} from '../handlers/user';


const router: Router = Router();

router.get('/', isAuth, getAllUsers);
router.get('/:id', isAuth, getUser);
router.post('/', createUser);  
router.delete('/', isAuth,deleteUsers);

export default router;
import { Router } from "express";

import {getAllUsers, getUser, createUser} from '../handlers/user';


const router: Router = Router();

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', createUser);  


export default router;
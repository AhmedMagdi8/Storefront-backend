import {Router} from 'express';

import isAuth from '../middleware/auth-middleware';


import {getAllProducts, getProduct, createProduct} from '../handlers/product';


const router: Router = Router();


router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.post('/', isAuth, createProduct);



export default router;
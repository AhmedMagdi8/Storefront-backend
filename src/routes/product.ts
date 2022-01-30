import {Router} from 'express';

import {getAllProducts, getProduct, createProduct} from '../handlers/product';

const router: Router = Router();


router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);



export default router;
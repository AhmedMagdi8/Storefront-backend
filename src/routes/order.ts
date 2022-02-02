import {Router} from 'express';

import isAuth from '../middleware/auth-middleware';

import {getUserOrders, createOrder, getAllOrders, addProductToOrder, getOrderdetails} from '../handlers/order';

const router = Router();

router.get('/', isAuth, getAllOrders);
router.get('/:id', isAuth, getUserOrders);
router.get('/order/:id', isAuth, getOrderdetails)
router.post('/:orderId/:productId', isAuth,addProductToOrder);
router.post('/:id', isAuth, createOrder);

export default router;
import { Router } from 'express';
import { create, find, findOne, findByCategory, remove, update } from '../controllers/product.controller';

const router = Router();

router.get('/products', find);
router.get('/products/:slug', findOne);
router.get('/products/category/:category', findByCategory);
router.post('/products/create', create);
router.put('/products/:slug', update);
router.delete('/products/:slug', remove);

export default router;

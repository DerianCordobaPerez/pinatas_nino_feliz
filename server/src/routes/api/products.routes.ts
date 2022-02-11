import { Router } from 'express';
import { find, findOne, findByCategory } from '../../controllers/product.controller';

const router = Router();

router.get('/products', find);
router.get('/products/:slug', findOne);
router.get('/products/category/:category', findByCategory);

export default router;

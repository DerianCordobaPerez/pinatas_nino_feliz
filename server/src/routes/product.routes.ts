import { Router } from 'express';
import { create, find, findOne, findByCategory, remove, update } from '../controllers/product.controller';
import { isAuthenticated } from '../middlewares/auth';

const router = Router();

router.get('/products', find);
router.get('/products/:slug', findOne);
router.get('/products/category/:category', isAuthenticated, findByCategory);
router.post('/products/create', isAuthenticated, create);
router.put('/products/:slug', isAuthenticated, update);
router.delete('/products/:slug', isAuthenticated, remove);

export default router;

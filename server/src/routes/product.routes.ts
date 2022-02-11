import { Router } from 'express';
import { index, create, store, edit, update, destroy } from '../controllers/product.controller';
import { isAuthenticated } from '../middlewares/auth';
import { uploadImages } from '../middlewares/multer';

const router = Router();

router.get('/products', index);
router.get('/products/create', isAuthenticated, create);
router.post('/products/create', [isAuthenticated, uploadImages('products')], store);
router.get('/products/:slug/edit', isAuthenticated, edit);
router.put('/products/:slug/edit', [isAuthenticated, uploadImages('products')], update);
router.delete('/products/:slug/destroy', isAuthenticated, destroy);

export default router;

import { Router } from 'express';
import {
  index,
  create,
  store,
  find,
  findOne,
  findByCategory,
  edit,
  update,
  destroy,
} from '../controllers/product.controller';
import { isAuthenticated } from '../middlewares/auth';
import { uploadImages } from '../middlewares/multer';

const router = Router();

// Products dashboard routes
router.get('/products', index);
router.get('/products/create', isAuthenticated, create);
router.post('/products/create', [isAuthenticated, uploadImages('products')], store);
router.get('/products/:slug/edit', isAuthenticated, edit);
router.put('/products/:slug/edit', [isAuthenticated, uploadImages('products')], update);
router.delete('/products/:slug/destroy', isAuthenticated, destroy);

// Products api routes
router.get('/api/ecommerce/v1/products', find);
router.get('/api/ecommerce/v1/products/:slug', findOne);
router.get('/api/ecommerce/v1/products/category/:category', findByCategory);

export default router;

import { Router } from 'express';
import {
  index,
  create,
  store,
  find,
  findOne,
  findByCategory,
  destroy,
  update,
} from '../controllers/product.controller';
import { isAuthenticated } from '../middlewares/auth';
import { uploadImages } from '../middlewares/multer';

const router = Router();

router.get('/api/ecommerce/v1/products', find);
router.get('/api/ecommerce/v1/products/:slug', findOne);
router.get('/api/ecommerce/v1/products/category/:category', findByCategory);
router.get('/products', index);
router.get('/products/create', isAuthenticated, create);
router.post('/products/create', [isAuthenticated, uploadImages('images')], store);
router.put('/products/:slug/edit', isAuthenticated, update);
router.delete('/products/:slug/destroy', isAuthenticated, destroy);

export default router;

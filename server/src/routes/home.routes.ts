import { Router } from 'express';
import { home } from '../controllers/home.controller';
import { isAuthenticated } from '../middlewares/auth';

const router = Router();

router.get('/', isAuthenticated, home);

export default router;

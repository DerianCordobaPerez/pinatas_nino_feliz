import { Router } from 'express';
import { signin, handleSignin, signup, handleSignup, logout } from '../controllers/user.controller';
import { uploadImage } from '../middlewares/multer';
import { isAuthenticated } from '../middlewares/auth';

const router = Router();

router.get('/signup', isAuthenticated, signup);
router.post('/signup', [isAuthenticated, uploadImage('avatar')], handleSignup);
router.get('/signin', signin);
router.post('/signin', handleSignin);
router.get('/logout', isAuthenticated, logout);

export default router;

import { Router } from 'express';
import { signin, handleSignin, signup, handleSignup, logout } from '../controllers/user.controller';

const router = Router();

router.get('/signup', signup);
router.post('/signup', handleSignup);
router.get('/signin', signin);
router.post('/signin', handleSignin);
router.get('/logout', logout);

export default router;

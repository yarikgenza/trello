import express, {Router} from 'express';
import * as authController from '../controllers/auth.js';

const router = Router();

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);

export default router;

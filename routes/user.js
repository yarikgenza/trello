import {Router} from 'express';
import * as userController from '../controllers/user';

const router = Router();

router.get('/user', userController.getUser);

export default router;

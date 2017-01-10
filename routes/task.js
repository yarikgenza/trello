import {Router} from 'express';
import * as taskController from '../controllers/task';

const router = Router();

router.post('/task', taskController.getList);
router.get('/task/:id', taskController.getTask);
router.get('/task/complete/:id', taskController.completeTask);

router.post('/task/add', taskController.addTask);

router.delete('/task/:id', taskController.delTask);

export default router;

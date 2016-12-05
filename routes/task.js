import express, {Router} from 'express';
import * as taskController from '../controllers/task.js';

const router = Router();

router.get('/task', taskController.getList);
router.get('/task/:id', taskController.getTask);
router.get('/task/complete/:id', taskController.completeTask);

router.post('/task', taskController.addTask);

router.delete('/task/:id', taskController.delTask);

export default router;
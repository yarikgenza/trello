import express, {Router} from 'express';
import * as rowController from '../controllers/row';

const router = Router();

router.get('/row', rowController.getRows);
router.post('/row', rowController.addRow)

export default router;

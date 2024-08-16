import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.get('/', userController.index);
router.get('/:id', userController.show);
router.post('/', userController.store);

export default router;

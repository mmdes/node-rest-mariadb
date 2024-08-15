import { Router } from 'express';
import homeController from '../controllers/homeController';

const router = new Router();

router.get('/', homeController.store);

export default router;

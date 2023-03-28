import { Router } from 'express';

import CarController from '../controllers/CarController';
import CartypeController from '../controllers/CartypeController';

const router = new Router();

router.get('/', CarController.index);
router.post('/', CarController.store);

router.get('/types', CartypeController.index);

export default router;

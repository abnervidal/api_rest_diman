import { Router } from 'express';

import CarController from '../controllers/CarController';
import CartypeController from '../controllers/CartypeController';
import CarFueltypeController from '../controllers/CarFueltypeController';

const router = new Router();

router.get('/', CarController.index);
router.post('/', CarController.store);

router.get('/types', CartypeController.index);
router.get('/fuel', CarFueltypeController.index);

export default router;

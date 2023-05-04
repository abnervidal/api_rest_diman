import { Router } from 'express';

import CarController from '../controllers/CarController';
import CartypeController from '../controllers/CartypeController';
import CarFueltypeController from '../controllers/CarFueltypeController';
import CarPhotoController from '../controllers/CarPhotoController';

import CarOccurrenceController from '../controllers/CarOccurrenceController';
import CarOccurrencetypeController from '../controllers/CarOccurrencetypeController';

const router = new Router();
const occurrence = new Router();

router.get('/', CarController.index);
router.post('/', CarController.store);

router.get('/types', CartypeController.index);
router.get('/fuel', CarFueltypeController.index);
router.get('/photo', CarPhotoController.index);
router.post('/photo', CarPhotoController.store);

occurrence.get('/', CarOccurrenceController.index);
occurrence.post('/', CarOccurrenceController.store);

occurrence.get('/types', CarOccurrencetypeController.index);

export default router;

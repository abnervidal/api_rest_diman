import { Router } from 'express';

import UploadController from '../controllers/UploadController';

import CarController from '../controllers/CarController';
import CartypeController from '../controllers/CartypeController';
import CarFueltypeController from '../controllers/CarFueltypeController';

import CarOccurrenceController from '../controllers/CarOccurrenceController';
import CarOccurrencetypeController from '../controllers/CarOccurrencetypeController';

import CarInspectionController from '../controllers/CarInspectionController';

import { photoArrayMulter } from '../config/multerConfig';

const router = new Router();
const occurrence = new Router();
const inspections = new Router();

router.use('/occurrences/', occurrence);
router.use('/inspections/', inspections);

router.get('/', CarController.index);
router.put('/:id', CarController.update);
// router.delete('/:id', CarController.delete);
router.post('/', photoArrayMulter, CarController.store, UploadController.storeCar);

router.get('/types', CartypeController.index);
router.get('/fuel', CarFueltypeController.index);

occurrence.get('/', CarOccurrenceController.index);
occurrence.put('/:id', CarOccurrenceController.update);
occurrence.post('/', photoArrayMulter, CarOccurrenceController.store, UploadController.storeCarOccurrence);
occurrence.get('/types', CarOccurrencetypeController.index);

inspections.get('/', CarInspectionController.index);
inspections.put('/:id', CarInspectionController.update);
inspections.post('/', photoArrayMulter, CarInspectionController.store, UploadController.storeCarInspection);

export default router;

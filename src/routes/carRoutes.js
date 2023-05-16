import { Router } from 'express';

import UploadController from '../controllers/UploadController';

import CarController from '../controllers/CarController';
import CartypeController from '../controllers/CartypeController';
import CarFueltypeController from '../controllers/CarFueltypeController';
// import CarPhotoController from '../controllers/CarPhotoController';

import CarOccurrenceController from '../controllers/CarOccurrenceController';
import CarOccurrencetypeController from '../controllers/CarOccurrencetypeController';

import CarInspectionController from '../controllers/CarInspectionController';
// import CarInspectionPhotoController from '../controllers/CarInspectionPhotoController';

import { photoArrayMulter } from '../config/multerConfig';

const router = new Router();
const occurrence = new Router();
const inspections = new Router();

router.use('/occurrences/', occurrence);
router.use('/inspections/', inspections);

router.get('/', CarController.index);
router.post('/', photoArrayMulter, CarController.store, UploadController.storeCar);

router.get('/types', CartypeController.index);
router.get('/fuel', CarFueltypeController.index);
// router.get('/photo', CarPhotoController.index);
// router.post('/photo', CarPhotoController.store);

occurrence.get('/', CarOccurrenceController.index);
occurrence.post('/', CarOccurrenceController.store);
occurrence.get('/types', CarOccurrencetypeController.index);

inspections.get('/', CarInspectionController.index);
inspections.post('/', photoArrayMulter, CarInspectionController.store, UploadController.storeCarInspection);
// inspections.post('/photos', CarInspectionPhotoController.store);

export default router;

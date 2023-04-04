import { Router } from 'express';

import CarController from '../controllers/CarController';
import CartypeController from '../controllers/CartypeController';
import CarFueltypeController from '../controllers/CarFueltypeController';
import CarPhotoController from '../controllers/CarPhotoController';

const router = new Router();

router.get('/', CarController.index);
router.post('/', CarController.store);

router.get('/types', CartypeController.index);
router.get('/fuel', CarFueltypeController.index);
router.get('/photo', CarPhotoController.index);
router.post('/photo', CarPhotoController.store);
// router.get('/photo', CarPhotoController.show);
// router.put('/photo', CarPhotoController.update);
// router.delete('/photo', CarPhotoController.delete);

export default router;

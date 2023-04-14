import { Router } from 'express';

import CarOccurrenceController from '../controllers/CarOccurrenceController';
import CarOccurrencetypeController from '../controllers/CarOccurrencetypeController';

const router = new Router();

router.get('/', CarOccurrenceController.index);
router.post('/', CarOccurrenceController.store);

router.get('/types', CarOccurrencetypeController.index);
export default router;

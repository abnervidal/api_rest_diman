import { Router } from 'express';

import OccurrenceCarController from '../controllers/OccurrenceCarController';
import OccurrenceCartypeController from '../controllers/OccurrenceCartypeController';

const router = new Router();

router.get('/', OccurrenceCarController.index);
router.post('/', OccurrenceCarController.store);

router.get('/types', OccurrenceCartypeController.index);
export default router;

import { Router } from 'express';
import WorkerTaskController from '../controllers/WorkerTaskController';
import WorkerTaskRisktypeController from '../controllers/WorkerTaskRisktypeController';

const router = new Router();

const workerTaskRiskRoutes = new Router();
router.use('/risks/', workerTaskRiskRoutes);

router.get('/', WorkerTaskController.index);
router.post('/', WorkerTaskController.store);

workerTaskRiskRoutes.get('/types', WorkerTaskRisktypeController.index);

export default router;

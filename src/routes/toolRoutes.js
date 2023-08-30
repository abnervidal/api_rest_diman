import { Router } from 'express';
import ToolController from '../controllers/ToolController';
import ToolAcquisitionController from '../controllers/ToolAcquisitionController';
import ToolAcquisitionEndController from '../controllers/ToolAcquisitionEndController';
import ToolAcquisitionStatusController from '../controllers/ToolAcquisitionStatusController';
import ToolAcquisitionStorageController from '../controllers/ToolAcquisitionStorageController';
import ToolAcquisitionUseController from '../controllers/ToolAcquisitionUseController';
import ToolAcquisitionUseOccurrenceController from '../controllers/ToolAcquisitionUseOccurrenceController';
import ToolAcquisitionUseRelationController from '../controllers/ToolAcquisitionUseRelationController';
import ToolAcquisitionUseReturnController from '../controllers/ToolAcquisitionUseReturnController';
import ToolSpecificationController from '../controllers/ToolSpecificationController';
import { photoArrayMulter } from '../config/multerConfig';

const router = new Router();
const acquisition = new Router();
const specification = new Router();

router.use('/specification/', specification);
router.use('/acquisition/', acquisition);

router.get('/', ToolController.index);
router.post('/', ToolController.store);

router.get('/', ToolAcquisitionController.index);

router.get('/', ToolSpecificationController.index);

export default router;

import { Router } from 'express';
const router = Router();
import controller from '../controllers/CityController/CityController.js';
import roleMiddleware from '../middleware/RoleMiddleware.js';

router.get('/', controller.getCities);
router.post('/',roleMiddleware(['service provider']), controller.addCity);

router.get('/"id');

export { router };

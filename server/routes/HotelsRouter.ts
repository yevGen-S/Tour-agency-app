import { Router } from 'express';
import controller from '../controllers/HotelController/HotelController.js';
import roleMiddleware from '../middleware/RoleMiddleware.js';

const router = Router();

router.get('/', controller.getHotels);
router.post('/', controller.addHotel);

router.get('/"id');
router.delete('/:id', controller.deleteHotel);

export { router };

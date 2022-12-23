import { Router } from 'express';
import controller from '../controllers/HotelController/HotelController.js';
import roleMiddleware from '../middleware/RoleMiddleware.js';

const router = Router();

router.get('/', controller.getHotels);
router.post('/', roleMiddleware(['service provider']), controller.addHotel);
router.put('/', roleMiddleware(['service provider']), controller.changeHotel);

router.get('/:id');
router.delete(
    '/:id',
    roleMiddleware(['service provider']),
    controller.deleteHotel
);

export { router };

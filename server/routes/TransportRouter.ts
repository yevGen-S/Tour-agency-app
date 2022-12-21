import Router from 'express';
import controller from '../controllers/TransportController/TransportController.js';
import roleMiddleware from '../middleware/RoleMiddleware.js';

const router = Router();

router.get('/', controller.getAllTransport);

router.post('/', roleMiddleware(['service provider']), controller.addTransport);
router.get(
    '/:id',
    roleMiddleware(['service provider']),
    controller.getTransport
);

router.delete('/:id', roleMiddleware(['service provider']));
router.put('/:id', roleMiddleware(['service provider']));

export { router };

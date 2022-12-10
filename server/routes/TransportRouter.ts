import Router from 'express';
import controller from '../controllers/TransportController/TransportController.js';

const router = Router();

router.get('/', controller.getAllTransport);

router.post('/:id', controller.addTransport);
router.get('/:id', controller.getTransport);

router.patch('/:id');
router.delete('/:id');
router.put('/:id');

export { router };

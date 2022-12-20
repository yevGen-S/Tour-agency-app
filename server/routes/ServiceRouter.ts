import Router from 'express';
import ServiceController from '../controllers/ServiceController/ServiceController.js';

const router = Router();

router.get('/', ServiceController.getAllServices);

router.post('/', ServiceController.addService);
router.get('/:id', ServiceController.getService);

router.get('/best_rated', ServiceController.getBestRatedServices);
router.get('/most_commented', ServiceController.getMostCommentedServices);

router.get('/feedback/:serviceid', ServiceController.getFeedbacksOnService);
router.get('/response/:serviceid', ServiceController.getResponsesOnService);

// router.patch('/:id');
// router.delete('/:id');
// router.put('/:id');

export { router };

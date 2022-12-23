import Router from 'express';
import ServiceController from '../controllers/ServiceController/ServiceController.js';
import roleMiddleware from '../middleware/RoleMiddleware.js';

const router = Router();

router.get('/', ServiceController.getAllServices);

router.post('/', ServiceController.addService);
router.put('/change', ServiceController.changeService)
router.get('/:id', ServiceController.getService);

router.get('/best_rated', ServiceController.getBestRatedServices);
router.get('/most_commented', ServiceController.getMostCommentedServices);

// router.get('/feedbacks_and_responses/:id', ServiceController.getFeedbacksAndResponsesOnService);

router.get('/feedback/:id', ServiceController.getFeedbacksOnService);
router.get('/response/:id', ServiceController.getResponsesOnService);

router.post('/feedback', roleMiddleware(['client', 'admin','service provider']), ServiceController.postFeedback);
router.post('/response', roleMiddleware(['client', 'admin','service provider']), ServiceController.postResponse);

// router.patch('/:id');
// router.delete('/:id');
// router.put('/:id');

export { router };

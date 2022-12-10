import Router from 'express';
import controller from '../controllers/TourController/TourController.js';

const router = Router();

router.post('/', controller.addTour);
router.get('/', controller.getAllTours);
router.get('/:id', controller.getTour);

router.get('/tour_points/:id', controller.getTourPoints);
router.put('/tour_points/:id');

router.get('/best_rated', controller.getBestRatedTours);
router.get('/most_commented', controller.getMostCommentedTours);

router.patch('/:id');
router.delete('/:id');
router.put('/:id');

export { router };

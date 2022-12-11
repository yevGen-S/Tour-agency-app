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

/**
 * for client
 */
router.post('/book_tour');
router.post('/pay_tour');

router.get('/booked_tours');
router.get('/paid_tours')

/**
 * for admin
 */
router.post('/make_tour');
router.patch('/change_tour/:id')
router.put('/replace_tour/:id')

router.patch('/:id');
router.delete('/:id');
router.put('/:id');

export { router };

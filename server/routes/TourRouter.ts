import Router from 'express';
import controller from '../controllers/TourController/TourController.js';
import roleMiddleware from '../middleware/RoleMiddleware.js';

const router = Router();

router.get('/sells_report', controller.getSellsReport);

router.get('/', controller.getAllTours);
router.get('/:id', controller.getTour);

router.get('/points/:id', controller.getTourPoints);

router.get('/best_rated', controller.getBestRatedTours);
router.get('/most_commented', controller.getMostCommentedTours);

/**
 * for client
 */
router.post('/book', roleMiddleware(['client']), controller.bookTour);

router.put(
    '/order_status',
    roleMiddleware(['client']),
    controller.changeTourStatus
);

router.get(
    '/booked/:login',
    roleMiddleware(['client']),
    controller.getBookedTours
);
/**
 * for admin
 */
router.post('/', roleMiddleware(['admin']), controller.addTour);
router.post('/points', roleMiddleware(['admin']), controller.addTourPoints);

router.patch('/:id', roleMiddleware(['admin']));
router.put('/:id', roleMiddleware(['admin']));
router.put('/points/:id', roleMiddleware(['admin']));

router.patch('/:id');
router.delete('/:id');
router.put('/:id');

export { router };

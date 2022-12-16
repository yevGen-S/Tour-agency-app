import Router from 'express';
import { router as authRouter } from './AuthRouter.js';
import roleMiddleware from '../middleware/RoleMiddleware.js';

const router = Router();

router.use(authRouter);

/**
 * for admin
 */
router.post('/staff', roleMiddleware('admin'));
router.delete('/staff/:id', roleMiddleware('admin'));

/**
 * for service provider
 */
router.post('/tranport', roleMiddleware('service provider'));
router.post('/service', roleMiddleware('service provider'));

router.put('/transport/:id', roleMiddleware('service provider'));
router.put('/service/:id', roleMiddleware('service provider'));

router.delete('/transport/:id'), roleMiddleware('service provider');
router.delete('/service/:id', roleMiddleware('service provider'));

export { router };

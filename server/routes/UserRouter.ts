import Router from 'express';
import { router as authRouter } from './AuthRouter.js';
import roleMiddleware from '../middleware/RoleMiddleware.js';
import controller from '../controllers/UserController/UserController.js';
import authController from '../controllers/AuthController/AuthController.js';

const router = Router();

router.use(authRouter);

/**
 * for admin
 */
router.put('/:id', roleMiddleware('admin'), controller.editUserData);
router.post(
    '/',
    roleMiddleware('admin'),
    authController.registration.bind(authController)
);
router.delete('/:id', roleMiddleware('admin'));

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

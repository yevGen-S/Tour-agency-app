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
router.put('/:id', roleMiddleware(['admin']), controller.editUserData);
router.post(
    '/',
    roleMiddleware(['admin']),
    authController.registration.bind(authController)
);
router.delete('/:id', roleMiddleware(['admin']));

export { router };

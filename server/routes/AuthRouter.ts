import { Router } from 'express';
import controller from '../controllers/AuthController/AuthController.js';
import userController from '../controllers/UserController/UserController.js';
import authMiddleware from '../middleware/AuthMiddleware.js';
import roleMiddleware from '../middleware/RoleMiddleware.js';

const router = Router();

router.post('/registration', controller.registration.bind(controller));
router.post('/login', controller.login.bind(controller));
router.get('/auth', authMiddleware, controller.auth);

router.get('/', roleMiddleware('admin'), controller.getUsers);

export { router };

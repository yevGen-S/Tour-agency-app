import { Router } from 'express';
import controller from '../controllers/AuthController/AuthController.js';
import userController from '../controllers/UserController/UserController.js'

const router = Router();

router.post('/registration', controller.registration.bind(controller));
router.post('/login', controller.login);
router.get('/auth', controller.auth);

router.get('/users', controller.getUsers);

router.post('/userExists', userController.isUserLoginExists)

export { router };

import { Router } from 'express';
import controller from '../controllers/AuthController.js';

const router = Router();

router.post('/registration', controller.registration);
router.post('/login', controller.login);
router.get('/auth', controller.auth);
router.get('/users', controller.getUsers);

export { router };

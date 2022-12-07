import {Router} from 'express';
import  controller from '../controller/AuthController.js';

const router = Router();

router.post('/registration', controller.registration);
router.post('/login', controller.login);
router.get('/users', controller.getUsers);


export default router;
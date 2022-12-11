import Router from 'express';
import controller from '../controllers/AuthController/AuthController.js';

const router = Router();

router.get('/users', controller.getUsers);



export { router };

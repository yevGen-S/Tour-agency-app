import Router from 'express';
import { router as feedbackRouter } from './FeedbackRouter.js';
import { router as responseRouter } from './ResponseRouter.js';
import { router as authRouter } from './AuthRouter.js';
import { router as tourRouter } from './TourRouter.js';
import { router as transportRouter } from './TransportRouter.js';
import { router as serviceRouter } from './ServiceRouter.js';
import {router as userRouter} from './UserRouter.js'

/**
 * Main router, that collects all routes.
 */
const router = Router();

router.use('/user', userRouter);
router.use('/feedback', feedbackRouter);
router.use('/response', responseRouter);
router.use('/service', serviceRouter);
router.use('/transport', transportRouter);
router.use('/tour', tourRouter);

export { router };

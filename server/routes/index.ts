import Router from 'express';
import { router as feedbackRouter } from './FeedbackRouter.js';
import { router as responseRouter } from './ResponseRouter.js';
import { router as tourRouter } from './TourRouter.js';
import { router as transportRouter } from './TransportRouter.js';
import { router as serviceRouter } from './ServiceRouter.js';
import { router as userRouter } from './UserRouter.js';
import { router as cityRouter } from './CitiesRouter.js';
import {router as hotelRouter} from './HotelsRouter.js'

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
router.use('/city', cityRouter);
router.use('/hotel', hotelRouter);

export { router };

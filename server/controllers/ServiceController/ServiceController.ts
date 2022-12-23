import { Request, Response } from 'express';
import { pool } from '../../db.js';
import {
    getAllCommentsAndResponsesOnService,
    queryAddService,
    queryAllServices,
    queryChangeService,
    queryGetBestRatedServices,
    queryGetFeedbacksOnService,
    queryGetMostCommentedServices,
    queryGetResponsesOnService,
    queryGetServiceById,
    queryPostFeedback,
    queryPostResponse,
} from './ServiceQueries.js';

class ServiceController {
    async getAllServices(req: Request, res: Response) {
        try {
            const services = await pool.query(queryAllServices);
            res.status(200).json({
                message: 'Successfull getting services',
                data: services.rows,
            });
        } catch (e) {
            res.status(400).json({ message: 'Error request', error: e });
        }
    }

    async addService(req: Request, res: Response) {
        try {
            const { city, serviceType, price } = req.body;
            const addedService = await pool.query(queryAddService, [
                city,
                serviceType,
                price,
            ]);
            res.status(200).json({
                message: 'Add successfully',
                data: addedService.rows,
            });
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: 'Erorr of adding', error: e });
        }
    }

    async getService(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const service = await pool.query(queryGetServiceById, [id]);

            res.status(200).json({
                message: 'Get successfully',
                data: service.rows,
            });
        } catch (e) {
            res.status(400).json({
                message: 'Error of getting service',
                error: e,
            });
        }
    }

    async getBestRatedServices(req: Request, res: Response) {
        try {
            const data = await pool.query(queryGetBestRatedServices);

            res.status(200).json({
                message: 'Successful get best rated services',
                data: data.rows,
            });
        } catch (e) {
            res.status(400).json({
                message: 'Error of getting best services',
                error: e,
            });
        }
    }

    async getMostCommentedServices(req: Request, res: Response) {
        try {
            const data = await pool.query(queryGetMostCommentedServices);

            res.status(200).json({
                message: 'Successful get most commented services',
                data: data.rows,
            });
        } catch (e) {
            res.status(400).json({
                message: 'Error of getting most commented services',
                error: e,
            });
        }
    }

    async getFeedbacksAndResponsesOnService(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const data = await pool.query(getAllCommentsAndResponsesOnService, [
                id,
            ]);

            res.status(200).json({
                message: 'Successful get  comments and responses on service',
                data: data.rows,
            });
        } catch (e) {
            res.status(400).json({
                message: 'Error of getting comments and responses',
                error: e,
            });
        }
    }

    async getResponsesOnService(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const data = await pool.query(queryGetResponsesOnService, [id]);

            res.status(200).json({
                message: 'Successful get responses on service',
                data: data.rows,
            });
        } catch (e) {
            res.status(400).json({
                message: 'Error of getting responses on service',
                error: e,
            });
        }
    }

    async getFeedbacksOnService(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const data = await pool.query(queryGetFeedbacksOnService, [id]);

            res.status(200).json({
                message: 'Successful get feedbacks on service',
                data: data.rows,
            });
        } catch (e) {
            res.status(400).json({
                message: 'Error of getting feedbacks',
                error: e,
            });
        }
    }

    async postFeedback(req: Request, res: Response) {
        try {
            const { rating, text, login, service_id } = req.body;

            const data = await pool.query(queryPostFeedback, [
                rating,
                text,
                login,
                service_id,
            ]);

            res.status(200).json({
                message: 'Successful post feedback on service',
                data: data,
            });
        } catch (e) {
            res.status(400).json({
                message: 'Error of posting feedback',
                error: e,
            });
        }
    }

    async postResponse(req: Request, res: Response) {
        try {
            const { login, text, feedback_id } = req.body;

            const data = await pool.query(queryPostResponse, [
                login,
                text,
                feedback_id,
            ]);

            res.status(200).json({
                message: 'Successful post response on feedback',
                data: data,
            });
        } catch (e) {
            res.status(400).json({
                message: 'Error of posting reponse',
                error: e,
            });
        }
    }

    async changeService(req: Request, res: Response) {
        try {
            const { id, price, city_id } = req.body;

            const data = await pool.query(queryChangeService, [
                id,
                price,
                city_id,
            ]);

            res.status(200).json({
                message: 'Successful change service',
                data: data,
            });
        } catch (e) {
            console.log(e);
            
            res.status(400).json({
                message: 'Error of changing service',
                error: e,
            });
            
        }
    }
}

export default new ServiceController();

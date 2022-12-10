import { Request, Response } from 'express';
import { pool } from '../../db.js';
import {
    queryAddService,
    queryAllServices,
    queryGetBestRatedServices,
    queryGetMostCommentedServices,
    queryGetServiceById,
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
                message: 'Error of getting best services',
                error: e,
            });
        }
    }
}

export default new ServiceController();

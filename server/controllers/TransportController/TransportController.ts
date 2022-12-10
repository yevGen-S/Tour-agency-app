import { Request, Response } from 'express';
import { pool } from '../../db.js';
import {
    queryAddTransport,
    queryGetAllTransports,
    queryGetTransportById,
} from './TransportQueries.js';

class TransportController {
    async getAllTransport(req: Request, res: Response) {
        try {
            const transports = await pool.query(queryGetAllTransports);
            return res.status(200).json({
                message: 'Successfull getting transports',
                data: transports.rows,
            });
        } catch (e) {
            res.status(400).json({ message: 'Error request', error: e });
        }
    }

    async addTransport(req: Request, res: Response) {
        try {
            const { transportType, cityFrom, cityTo } = req.body;

            const addedTour = await pool.query(queryAddTransport, [
                transportType,
                cityFrom,
                cityTo,
            ]);

            return res.status(200).json({
                message: 'Add successfully',
                data: addedTour,
            });
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: 'Error of adding', error: e });
        }
    }

    async getTransport(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const transport = await pool.query(queryGetTransportById, [id]);

            return res.status(200).json({
                message: 'Get successfully',
                data: transport.rows,
            });
        } catch (e) {
            res.status(400).json({
                message: 'Error of getting transport',
                error: e,
            });
        }
    }
}

export default new TransportController();

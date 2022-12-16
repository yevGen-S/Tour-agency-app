import { Request, Response } from 'express';
import { pool } from '../../db.js';
import {
    queryAddTours,
    queryGetBestRatedTours,
    queryGetMostCommentedTours,
    queryGetSellsReport,
    queryGetTourById,
    queryGetTourPoints,
} from './TourQueries.js';
import { queryGetAllTours } from './TourQueries.js';

class TourController {
    async getAllTours(req: Request, res: Response) {
        try {
            const tours = await pool.query(queryGetAllTours);
            res.status(200).json({
                message: 'Successfull getting tours',
                data: tours.rows,
            });
        } catch (e) {
            res.status(400).json({ message: 'Error request', error: e });
        }
    }

    async addTour(req: Request, res: Response) {
        try {
            const {
                Tour_name,
                number_of_places,
                period_start,
                period_end,
                City,
                hotel_id,
            } = req.body;

            const addedTour = await pool.query(queryAddTours, [
                Tour_name,
                number_of_places,
                period_start,
                period_end,
                City,
                hotel_id,
            ]);

            res.status(200).json({
                message: 'Add successfully',
                data: addedTour,
            });
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: 'Error of adding', error: e });
        }
    }

    async getTour(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const tour = await pool.query(queryGetTourById, [id]);

            res.status(200).json({
                message: 'Get successfully',
                data: tour.rows,
            });
        } catch (e) {
            res.status(400).json({
                message: 'Error of getting tour',
                error: e,
            });
        }
    }

    async getBestRatedTours(req: Request, res: Response) {
        try {
            const bestRatedTours = await pool.query(queryGetBestRatedTours);
            res.status(200).json({
                message: 'Successful get best rated tours',
                data: bestRatedTours.rows,
            });
        } catch (e) {
            res.status(400).json({
                message: 'Error of getting best tours',
                error: e,
            });
        }
    }

    async getMostCommentedTours(req: Request, res: Response) {
        try {
            const mostCommentedTours = await pool.query(
                queryGetMostCommentedTours
            );
            res.status(200).json({
                message: 'Successful get most commented tours',
                data: mostCommentedTours.rows,
            });
        } catch (e) {
            res.status(400).json({
                message: 'Error of getting best tours',
                error: e,
            });
        }
    }

    async getTourPoints(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const tourPoints = await pool.query(queryGetTourPoints, [id]);

            res.status(200).json({
                message: 'Success get tour points',
                data: tourPoints.rows,
            });
        } catch (e) {
            res.status(400).json({
                message: 'Error of getting tour points ',
                error: e,
            });
        }
    }

    async addTourPoints(req: Request, res: Response) {
        try {
        } catch (e) {}
    }

    async getSellsReport(req: Request, res: Response) {
        try {
            const sellsReport = await pool.query(queryGetSellsReport);

            res.status(200).json({
                message: 'Success get sells report',
                data: sellsReport.rows,
            });
        } catch (e) {
            res.status(400).json({
                message: 'Error of getting sells report!',
                error: e,
            });
        }
    }
}

export default new TourController();

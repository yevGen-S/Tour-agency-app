import { Request, Response } from 'express';
import { pool } from '../../db.js';
import {
    queryAddTour,
    queryBookTour,
    queryChangeStatus,
    queryChangeTourPoints,
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
                name,
                number_of_places,
                period_start,
                period_end,
                city_id,
                hotel_id,
            } = req.body;

            console.log(req.body);

            const addedTour = await pool.query(queryAddTour, [
                name,
                number_of_places,
                period_start,
                period_end,
                city_id,
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

    async chageTourPoints(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const tourPoints = await pool.query(queryChangeTourPoints, [id]);

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
            const { tourPoints } = req.body;
            let values = tourPoints.map((point: any) => {
                return `(${Object.values(point)
                    .map((value, index) => {
                        if (index === 4) {
                            return value;
                        } else {
                            return `'${value}'`;
                        }
                    })
                    .join(',')})`;
            });
            values = values.join(',');

            const data =
                await pool.query(`INSERT INTO "Tour_points" VALUES(uuid_generate_v4(), tour_id, service_id, "date", "day", description  )
                ${values}
            `);

            res.status(200).json({
                message: 'Successfully add tour points',
                data: data,
            });
        } catch (e) {
            res.status(300).json({error: e, message: 'Error of adding tour points'});
        }
    }

    async bookTour(req: Request, res: Response) {
        try {
            const { user_id, tour_id, status_id, transport_id } = req.body;
            const data = await pool.query(queryBookTour, [
                user_id,
                tour_id,
                status_id,
                transport_id,
            ]);

            res.status(400).json({
                message: 'Successfull booking',
                error: data,
            });
        } catch (e) {
            res.status(200).json({ message: 'Error', error: e });
        }
    }

    async changeTourStatus(req: Request, res: Response) {
        try {
            const { status, tour_id, user_id } = req.body;
            const data = await pool.query(queryChangeStatus, [
                status,
                tour_id,
                user_id,
            ]);

            res.status(400).json({
                message: 'Successfully paid',
                error: data,
            });
        } catch (e) {
            res.status(200).json({ message: 'Error', error: e });
        }
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

    async getBookedTours(req: Request, res: Response) {
        try {
            const bookedTours = await pool.query(queryGetSellsReport);

            res.status(200).json({
                message: 'Successfully get booked tours',
                data: bookedTours.rows,
            });
        } catch (e) {
            res.status(400).json({
                message: 'Error of getting booked tours!',
                error: e,
            });
        }
    }
}

export default new TourController();

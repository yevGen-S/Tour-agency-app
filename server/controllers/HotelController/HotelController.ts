import { Request, Response } from 'express';
import { pool } from '../../db.js';
import {
    queryAddHotel,
    queryChangeHotel,
    queryDeleteHotel,
    queryGetAllHotels,
} from './HotelQueries.js';

class HotelController {
    async getHotels(req: Request, res: Response) {
        try {
            const data = await pool.query(queryGetAllHotels);
            res.status(200).json({ message: 'Success', data: data.rows });
        } catch (e) {
            res.status(400).json({ message: 'Error', error: e });
        }
    }

    async addHotel(req: Request, res: Response) {
        try {
            const { name, city, food, price_for_night } = req.body;
            const data = await pool.query(queryAddHotel, [
                name,
                city,
                food,
                price_for_night,
            ]);
            res.status(200).json({ message: 'Success', data: data });
        } catch (e) {
            res.status(400).json({ message: 'Error', error: e });
        }
    }

    async deleteHotel(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const data = await pool.query(queryDeleteHotel, [id]);
            res.status(200).json({ message: 'Success', data: data });
        } catch (e) {
            res.status(400).json({ message: 'Error', error: e });
        }
    }

    async changeHotel(req: Request, res: Response) {
        try {
            const { name, city_id, food, price, id } = req.body;

            const data = await pool.query(queryChangeHotel, [
                id,
                name,
                city_id,
                food,
                price,
            ]);

            res.status(200).json({
                message: 'Successful change hotel',
                data: data,
            });
        } catch (e) {
            console.log(e);

            res.status(400).json({
                message: 'Error of chaging hotel',
                error: e,
            });
        }
    }
}

export default new HotelController();

import { Request, Response } from 'express';
import { pool } from '../../db.js';
import { queryAddCity, queryGetAllCities } from './CityQueries.js';

class CityController {
    async getCities(req, res) {
        try {
            const data = await pool.query(queryGetAllCities);
            res.status(200).json({ message: 'Success', data: data.rows });
        } catch (e) {
            res.status(400).json({ message: 'Error', error: e });
        }
    }

    async addCity(req, res) {
        try {
            const { name } = req.body;
            const data = await pool.query(queryAddCity, [name]);
            res.status(200).json({ message: 'Success', data: data });
        } catch (e) {
            res.status(400).json({ message: 'Error', error: e });
        }
    }
}

export default new CityController();

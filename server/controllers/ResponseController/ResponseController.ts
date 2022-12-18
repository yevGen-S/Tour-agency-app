import { pool } from '../../db.js';
import { queryAddResponse, queryDeleteResponse, queryGetAllResponse } from './ReponseQueries.js';

class ResponseController {
    async getResponses(req, res) {
        try {
            const data = await pool.query(queryGetAllResponse);
            res.status(200).json({ message: 'Success', data: data });
        } catch (e) {
            res.status(400).json({ message: 'Error', error: e });
        }
    }

    async addResponse(req, res) {
        try {
            const { id, text, user_id, feedback_id, date } = req.body;
            const data = await pool.query(queryAddResponse, [
                id,
                user_id,
                text,
                feedback_id,
                date,
            ]);
            res.status(200).json({ message: 'Success', data: data });
        } catch (e) {
            res.status(400).json({ message: 'Error', error: e });
        }
    }

    async deleteResponse(req, res) {
        try {
            const { id } = req.params;
            const data = await pool.query(queryDeleteResponse, [id]);
            res.status(200).json({ message: 'Success', data: data });
        } catch (e) {
            res.status(400).json({ message: 'Error', error: e });
        }
    }
}
export default new ResponseController();

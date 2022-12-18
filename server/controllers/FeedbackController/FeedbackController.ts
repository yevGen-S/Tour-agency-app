import { pool } from '../../db.js';
import {
    queryAddFeedback,
    queryDeleteFeedback,
    queryGetAllFeedback,
} from './FeedbackQueries.js';

class FeedbackController {
    async getFeedbacks(req, res) {
        try {
            const data = await pool.query(queryGetAllFeedback);
            res.status(200).json({ message: 'Success', data: data });
        } catch (e) {
            res.status(400).json({ message: 'Error', error: e });
        }
    }

    async addFeedback(req, res) {
        try {
            const { id, text, rating, user_id, service_id, date } = req.body;
            const data = await pool.query(queryAddFeedback, [
                id,
                text,
                rating,
                user_id,
                service_id,
                date,
            ]);
            res.status(200).json({ message: 'Success', data: data });
        } catch (e) {
            res.status(400).json({ message: 'Error', error: e });
        }
    }

    async deleteFeedback(req, res) {
        try {
            const { id } = req.params;
            const data = await pool.query(queryDeleteFeedback, [id]);
            res.status(200).json({ message: 'Success', data: data });
        } catch (e) {
            res.status(400).json({ message: 'Error', error: e });
        }
    }
}

export default new FeedbackController();

import { Response } from 'express';
import { pool } from '../../db.js';
import { queryEditUser } from './UserQueries.js';

class UserController {
    async editUserData(req: any, res: Response) {
        try {
            const { id, name, surname, login, email, telephone_number, role } =
                req.body;
            const response = await pool.query(queryEditUser, [
                id,
                name,
                surname,
                login,
                email,
                telephone_number,
                role,
            ]);
            res.status(200).json({
                message: 'Successful edit',
                data: response.rows,
            });
        } catch (e) {
            res.status(400).json({ message: 'Can`t edit user data', error: e });
        }
    }
}

export default new UserController();

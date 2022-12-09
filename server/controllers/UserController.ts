import { pool } from '../db.js';

class UserController {
    async isUserLoginExists(req, res) {
        try {
            const login = req;
            const userLoginExists = pool.query(
                `SELECT EXISTS(
                    SELECT * FROM "User"
                    WHERE login = $1
                );`,
                [login]
            );
            return userLoginExists;
        } catch (e) {
            res.status(404).json({
                message: 'No user with this login',
                error: e,
            });
        }
    }

    async addUser(req, res) {
        try {
            pool.query(
                `INSER INTO TABLE "User" 
                VALUES ($1, $2, $3, $4, $5)`
            );
        } catch (e) {
            console.log(e);
        }
    }
}

export default new UserController();

import { pool } from '../db.js';

class AuthController {
    async registration(req, res) {
        try {
            const { login, password } = req.body;
            // const candidate = await User.
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: 'Registration failed' });
        }
    }

    async login(req, res) {
        try {
        } catch (e) {}
    }

    async getUsers(req, res) {
        try {
            const users = await pool.query('SELECT "User"."id", "User"."login", "User"."name", "User"."surname" FROM "User"');
            res.json(users);
        } catch (e) {}
    }
}

export default new AuthController();

import { pool } from '../db.js';
import UserController from './UserController.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthController {
    async hashPassword(password: string) {
        return await bcrypt.hash(password, 10);
    }

    async validatePassword(plainPassword: string, hashedPassword: string) {
        return await bcrypt.compare(plainPassword, hashedPassword);
    }

    async registration(req, res) {
        try {
            const { login, password } = req.body;
            const candidateAprovement = (
                await UserController.isUserLoginExists(login, res)
            ).rows[0];

            if (candidateAprovement) {
                return res.status(400).json({
                    message: `User with login: ${login} is already exists`,
                });
            }

            //addUser(login, hashPassword)
        } catch (e) {
            res.status(400).json({ message: 'Registration failed', error: e });
        }
    }

    async login(req, res) {
        try {
        } catch (e) {
            console.log(e);
        }
    }

    async getUsers(req, res) {
        try {
            const users = await pool.query(
                `SELECT 
                    "User"."id", 
                    "User"."login", 
                    "User"."name", 
                    "User"."surname",
                    "Role"."type"
                FROM "User"
                JOIN "Role" 
                on "User"."role_id" = "Role"."id"`
            );
            res.json(users.rows);
        } catch (e) {
            console.log(e);
        }
    }

    async auth(req, res) {
        try {
        } catch (e) {
            console.log(e);
        }
    }
}

export default new AuthController();

import { pool } from '../../db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {
    queryAddUser,
    queryGetAllUsers,
    queryIsUserExists,
} from './AuthQueries.js';

const generateJwt = (email: string, role: string) => {
    return jwt.sign({ email, role }, process.env.SECRET_KEY, {
        expiresIn: '24h',
    });
};

class AuthController {
    async hashPassword(password: string) {
        return await bcrypt.hash(password, 10);
    }

    async validatePassword(plainPassword: string, hashedPassword: string) {
        return await bcrypt.compare(plainPassword, hashedPassword);
    }

    async isUserLoginExists(login: string) {
        try {
            const userLoginExists = pool.query(queryIsUserExists, [login]);
            return (await userLoginExists).rows[0].exists;
        } catch (e) {
            throw e;
        }
    }

    async addUser(
        login: string,
        password: string,
        role: string,
        name: string,
        surname: string,
        telephone_number: string,
        email: string,
        tour_subscription: boolean
    ) {
        try {
            const data = pool.query(queryAddUser, [
                login,
                password,
                role,
                name,
                surname,
                telephone_number,
                email,
                tour_subscription,
            ]);

            return data;
        } catch (e) {
            throw new Error(`Can't create user: ${e}`);
        }
    }

    async registration(req, res) {
        try {
            const {
                login,
                password,
                role,
                name,
                surname,
                telephone_number,
                email,
                tour_subscription,
            } = req.body;

            if (
                !login ||
                !password ||
                !name ||
                !surname ||
                !telephone_number ||
                !email
            ) {
                return res
                    .status(400)
                    .json({ message: 'User info not defined' });
            }

            const candidateAprovement = await this.isUserLoginExists(login);

            if (candidateAprovement) {
                return res.status(400).json({
                    message: `User with login: ${login} is already exists`,
                });
            }

            const hashedPassword = await this.hashPassword(password);

            await this.addUser(
                login,
                hashedPassword,
                role,
                name,
                surname,
                telephone_number,
                email,
                tour_subscription
            );

            const token = generateJwt(email, role);
            return res.json({ token });
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: 'Registration failed', error: e });
        }
    }

    async login(req, res) {
        try {
        } catch (e) {
            res.status(200).json({ message: 'Login failed' });
        }
    }

    async getUsers(req, res) {
        try {
            const users = await pool.query(queryGetAllUsers);
            res.status(200).json(users.rows);
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

import { pool } from '../../db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {
    queryAddUser,
    queryGetAllUsers,
    queryGetUser,
    queryIsUserExists,
} from './AuthQueries.js';
import { Request, Response } from 'express';

const generateJwt = (login: string, role: string) => {
    return jwt.sign({ login, role }, process.env.SECRET_KEY, {
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

    async getUser(login: string) {
        try {
            const user = await pool.query(queryGetUser, [login]);
            return user.rows[0];
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

            const token = generateJwt(login, role);
            return res.json({ token });
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: 'Registration failed', error: e });
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { login, password } = req.body;
            let user = await this.isUserLoginExists(login);

            if (!user) {
                throw new Error(`User with login not exists`);
            }

            user = await this.getUser(login);
            console.log('login', user);

            const comparePassword = bcrypt.compareSync(password, user.password);

            if (!comparePassword) {
                throw new Error('Password is not valid');
            }

            const token = generateJwt(user.login, user.role);
            return res.json({ token });
        } catch (e) {
            res.status(400).json({ message: 'Error of login', Error: e });
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
            const token = generateJwt(req.user.login, req.user.role);
            return res.status(200).json({ token });
        } catch (e) {
            res.status(400).json({
                message: "User can't pass authorization",
                error: e,
            });
        }
    }
}

export default new AuthController();

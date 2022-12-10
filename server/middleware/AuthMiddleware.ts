import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

/**
 * Middldeware для проверка токена 
 */
export default function (req: any, res: Response, next: Function) {
    if (req.method === 'OPTIONS') {
        next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1]; // Bearer asfasnfkajsfnjk
        if (!token) {
            return res.status(401).json({ message: 'Не авторизован' });
        }
        const decoded: any = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (e) {
        res.status(401).json({ message: 'Не авторизован' });
    }
}

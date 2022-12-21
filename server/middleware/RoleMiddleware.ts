import { Response } from 'express';
import jwt from 'jsonwebtoken';

export default function (roles: Array<string>) {
    return function (req: any, res: Response, next: Function) {
        if (req.method === 'OPTIONS') {
            next();
        }
        try {
            const token = req.headers.authorization.split(' ')[1]; // Bearer asfasnfkajsfnjk
            if (!token) {
                return res.status(401).json({ message: 'Не авторизован' });
            }
            const decoded: any = jwt.verify(token, process.env.SECRET_KEY);
            if (!roles.includes(decoded.role)) {
                return res.status(403).json({ message: 'Нет доступа' });
            }
            req.user = decoded;
            next();
        } catch (e) {
            res.status(401).json({ message: 'Не авторизован' });
        }
    };
}

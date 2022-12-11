import { $host } from '.';
import jwt_decode from 'jwt-decode';

/**
 * registration
 */
export const registration = async (
    login: string,
    password: string,
    name: string,
    surname: string,
    telephone_number: string,
    email: string,
    tour_subscription: boolean
) => {
    const { data } = await $host.post('api/user/registration', {
        login,
        password,
        role: 'client',
        name,
        surname,
        telephone_number,
        email,
        tour_subscription,
    });

    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
};

/**
 * login
 */
export const login = async (login: string, password: string) => {
    const { data } = await $host.post('api/user/login', {
        login,
        password,
    });

    localStorage.setItem('token', data.token);

    return jwt_decode(data.token);
};

/**
 * authprization
 */
export const auth = async () => {
    const { data } = await $host.post('api/user/auth');

    return jwt_decode(data.token);
};

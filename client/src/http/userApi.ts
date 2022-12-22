import { $authHost, $host } from '.';
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
    const { data } = await $authHost.get('api/user/auth');

    return jwt_decode(data.token);
};

/**
 * get all users (admin func)
 */
export const fetchAllUsers = async () => {
    const { data } = await $authHost.get('/api/user');

    return data;
};

/**
 * func to update user
 */
export const updateUser = async (user: any) => {
    const { data } = await $authHost.put(`/api/user/${user.id}`, user);
    return data;
};

export const addUser = async (
    login: string,
    password: string,
    role: string,
    name: string,
    surname: string,
    telephone_number: string,
    email: string,
    tour_subscription: boolean
) => {
    const { data } = await $authHost.post('api/user', {
        login,
        password,
        role,
        name,
        surname,
        telephone_number,
        email,
        tour_subscription,
    });

    return jwt_decode(data.token);
};

/**
 * pay tour
 */

// /**
//  * book a tour
//  */
export const bookTour = async (
    login: string,
    tour_id: string | undefined,
    transport_id: string | undefined
) => {
    const { data } = await $authHost.post('api/tour/book', {
        login,
        tour_id,
        status: 'booked',
        transport_id,
    });

    return data;
};

export const changeOrderStatus = async (
    user_id: string,
    tour_id: string,
    status: string
) => {
    const { data } = await $authHost.put('/api/tour/order_status', {
        user_id,
        tour_id,
        status,
    });

    return data;
};

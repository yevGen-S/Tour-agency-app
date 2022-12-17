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
    const {data} = await $authHost.put(`/api/user/${user.id}`, user)
    return data;
}


/**
 * pay tour
 */

// /**
//  * book a tour
//  */
// export const bookTour = async () => {
//     const { data } = await $authHost.post('api/');
// };

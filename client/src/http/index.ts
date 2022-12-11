import axios from 'axios';

/**
 * Запросы без авторизации
 */
const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});


/**
 * Запросы авторизованных пользователей
 */
const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

/**
 * Автоматическое подставление токена к каждому запросу
 */
const authInterceptor = (config: any) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
};

/**
 * Отрабатывает перед каждым запросом и подставляет токен в хедер
 * authorization
 */
$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };

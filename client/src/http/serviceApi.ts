import { $host, $authHost } from '.';

/**
 * fetch services
 */
export const fetchServices = async () => {
    const { data } = await $host.get('/api/service');

    return data;
};

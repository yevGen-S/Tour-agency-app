import { $host, $authHost } from '.';

/**
 * fetch cities
 */
export const fetchCities = async () => {
    const { data } = await $host.get('/api/city');
    return data;
};

export const addCity = async (name: string) => {
    const { data } = await $authHost.post('/api/city', name);
    return data;
};

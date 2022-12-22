import { $host, $authHost } from '.';

export const fetchTransports = async () => {
    const { data } = await $host.get('/api/transport');

    return data;
};

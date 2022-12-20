import { $host, $authHost } from '.';

/**
 * fetch services
 */
export const fetchServices = async () => {
    const { data } = await $host.get('/api/service');

    return data;
};

export const fetchService = async (id: string | undefined) => {
    const { data } = await $host.get(`/api/service/${id}`);

    return data.data;
};

export const fetchAllCommentsById = async (id: string | undefined) => {
    const { data } = await $host.get('/api/service/feedback/:serviceid');

    return data;
};

export const fetchAllResponsesById = async (id: string | undefined) => {
    const { data } = await $host.get('/api/service/response/:serviceid');

    return data;
};

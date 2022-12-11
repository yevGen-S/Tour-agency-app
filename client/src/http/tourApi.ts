import { $host, $authHost } from '.';

/**
 * Function to fetch tours.
 */
export const fetchTours = async () => {
    const { data } = await $host.get('/api/tour');
    return data.data;
};

/**
 * Function to fetch concrete tour.
 */
export const fetchTour = async (id: string | undefined) => {
    const { data } = await $host.get(`/api/tour/${id}`);

    return data.data;
};

export const fetchTourPoints = async (id: string | undefined) => {
    const { data } = await $host.get(`/api/tour/points/${id}`);
    return data.data;
};

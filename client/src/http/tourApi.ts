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

export const fetchSellsReport = async () => {
    const { data } = await $authHost.get('/api/tour/sells_report');

    return data.data;
};

export const createTour = async (
    name: string | undefined,
    number_of_places: number | undefined,
    period_start: string | undefined,
    period_end: string | undefined,
    city_id: string | undefined,
    hotel_id: string | undefined
) => {
    const { data } = await $authHost.post('/api/tour', {
        name: name,
        number_of_places: number_of_places,
        period_start: period_start,
        period_end: period_end,
        city_id: city_id,
        hotel_id: hotel_id,
    });

    return data;
};


/**
 * 
 * function to add tour points for tour
 */
export const addTourPoints = async (tourPoints: any) => {
    const { data } = await $authHost.post('/api/tour/points', {
        tourPoints,
    });

    return data;
};

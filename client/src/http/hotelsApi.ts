import { $host, $authHost } from '.';

/**
 * fetch cities
 */
export const fetchHotels = async () => {
    const { data } = await $host.get('/api/hotel');
    return data;
};

export const addHotel = async (
    id: string,
    name: string | undefined,
    city: string | undefined,
    food: string | undefined,
    price_for_night: number | undefined
) => {
    const { data } = await $authHost.post('/api/hotel', {
        id: id,
        name: name,
        city: city,
        food: food,
        price_for_night: price_for_night,
    });
    return data;
};

export const deleteHotel = async (id: string) => {
    const { data } = await $authHost.post('/api/hotel/:id', id);
    return data;
};

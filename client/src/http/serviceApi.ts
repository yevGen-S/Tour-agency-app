import { $host, $authHost } from '.';

/**
 * fetch services
 */
export const fetchServices = async () => {
    const { data } = await $host.get('/api/service');

    return data;
};

export const fetchService = async (id: string) => {
    const { data } = await $host.get(`/api/service/${id}`);

    return data.data;
};

/**
 *fetch feedbacks and reponses for them
 */
// export const fetchAllFeefbacksAndResponsesById = async (id: string | undefined) => {
//     const { data } = await $host.get(`/api/service/feedbacks_and_responses/${id}`);

//     return data;
// };

export const fetchFeedbackByServiceId = async (id: string) => {
    const { data } = await $host.get(`/api/service/feedback/${id}`);

    return data;
};

export const fetchResponsesByServiceId = async (id: string) => {
    const { data } = await $host.get(`/api/service/response/${id}`);

    return data;
};

export const postFeedback = async (
    rating: string,
    text: string,
    login: string,
    service_id: string
) => {
    const { data } = await $authHost.post(`/api/service/feedback`, {
        rating,
        text,
        login,
        service_id,
    });

    return data;
};

export const postResponse = async (
    text: string,
    login: string,
    feedback_id: string
) => {
    const { data } = await $authHost.post(`/api/service/response`, {
        login,
        text,
        feedback_id,
    });

    return data;
};

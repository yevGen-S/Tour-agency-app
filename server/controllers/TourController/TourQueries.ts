export const queryGetAllTours: string = `
    SELECT 
        t.id, 
        t."name" AS "Tour_name", 
        t.price, 
        t.number_of_places,
        t.rating,
        t.period_start,
        t.period_end,
        c."name" AS "City_name"
    FROM "Tour" t
    JOIN "City" c ON t.city_id = c.id
`;

export const queryGetTourPoints: string = `
    SELECT 
        s.id AS "Service_id",
        st."type" AS "Service_type",
        tp.description,
        tp."date",
        tp."day"
    FROM "Tour_points" tp 
    JOIN "Tour" t ON tp.tour_id = t.id
    JOIN "Service" s ON tp.service_id  = s.id 
    JOIN "Service_type" st ON s.service_type_id = st.id
    WHERE t.id = $1
`;

export const queryAddTour: string = `
    INSERT INTO "Tour"
    VALUES(
        uuid_generate_v4(),
        $1,
        NULL,
        $2,
        NULL,
        $3,
        $4,
        $5,
        $6
    );
`;

export const queryGetTourById: string = `
    SELECT 
        t.id, 
        t."name" as "Tour_name", 
        t.price, 
        t.number_of_places,
        t.rating,
        t.period_start,
        t.period_end,
        c."name" AS "City_name"
    FROM "Tour" t
    JOIN "City" c ON t.city_id = c.id
    WHERE t.id = $1
`;

export const queryGetBestRatedTours: string = `
    SELECT 
        t.id, 
        t."name", 
        t.price, 
        t.number_of_places,
        t.rating,
        t.period_start,
        t.period_end,
        c."name"
    FROM "Tour" t
    JOIN "City" c ON t.city_id = c.id
    ORDER BY rating DESC 
    LIMIT 3;
`;

export const queryGetMostCommentedTours: string = `
    SELECT 
        t."name" AS "Tour name",
        COUNT(f.id) AS "Number of feedbacks",
        AVG(f."rating") AS "Average rating"
    FROM "Tour_points" tp
    INNER JOIN "Tour" t ON tp.tour_id = t.id
    LEFT JOIN "Feedback" f ON tp.service_id = f.service_id 
    GROUP BY t."name"
    ORDER BY "Number of feedbacks" DESC;
`;

export const queryGetSellsReport: string = `
    SELECT 
        DISTINCT t."name" AS "Tour_name",
        COUNT(ct.tour_id) AS "Number_of_bought_tours", 
        SUM(t."price") AS "Summary_price"
    FROM clients_tours ct 
    INNER JOIN "Tour" t ON ct.tour_id = t.id 
    INNER JOIN "Status" s ON ct.status_id = s.id
    WHERE s."type" = 'paid'
    GROUP BY t."name"
`;

export const queryChangeTourPoints: string = `
        
`;

export const queryBookTour: string = `
    INSERT INTO clients_tours (user_id, tour_id, status_id, transport_id )
    VALUES (getUserId($1), $2, getStatusId($3), $4 );
`;

export const queryChangeStatus: string = `
    UPDATE clients_tours 
    SET status_id  = getStatusId($1)
    WHERE tour_id = $2 AND user_id = $3
`;

export const queryGetBookedTours: string = `
    SELECT 
        user_id,
        u."name",
        u.surname,
        u.email,
        u.login,
        t.id AS "tour_id",
        t."name" AS "tour",
        t.price,
        t.period_start,
        t.period_end,
        status."type" AS "order_status",
        c."name" AS "city"
    FROM clients_tours ct 
    JOIN "User" u ON ct.user_id = u.id 
    JOIN "Status" status ON ct.status_id = status.id 
    JOIN "Tour" t ON ct.tour_id = t.id 
    JOIN "City" c ON t.city_id = c.id 
    WHERE ct.user_id  = getUserId($1)
`;

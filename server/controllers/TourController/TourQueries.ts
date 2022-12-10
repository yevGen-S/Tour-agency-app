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

export const queryAddTours: string = `
    INSERT INTO "Tour"
    VALUES(
        uuid_generate_v4(),
        $1,
        NULL,
        $2,
        NULL,
        $3,
        $4,
        getcityid($5),
        $6
    );
`;

export const queryGetTourById: string = `
    SELECT 
        t.id, 
        t."name", 
        t.price, 
        t.number_of_places,
        t.rating,
        t.period_start,
        t.period_end,
        c."name" AS City
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

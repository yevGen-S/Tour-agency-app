export const queryAllServices: string = `
    SELECT 
        st."type" AS "Service",
        s.price,
        c.name AS "City"
    FROM "Service" s
    JOIN "Service_type" st ON
    s.service_type_id = st.id
    LEFT JOIN "City" c ON
    s.city_id = c.id
`;

export const queryAddService: string = `
    INSERT INTO "Service" VALUES(
        uuid_generate_v4(),
        getCityId($1),
        getServiceTypeId($2),
        $3
)
`;

export const queryGetServiceById: string = `
    SELECT * FROM "Service" s
    JOIN "Service_type" st
    ON s."service_type_id" = st."id"
    where s.id = $1
`;

export const queryGetBestRatedServices: string = `
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

export const queryGetMostCommentedServices: string = `
    SELECT 
        DISTINCT t."name",
        COUNT(ct.tour_id) AS "Number of tours", 
        SUM(t."price") AS "Summary price"
    FROM clients_tours ct 
    INNER JOIN "Tour" t ON ct.tour_id = t.id 
    INNER JOIN "Status" s ON ct.status_id = s.id
    WHERE s."type" = 'paid'
    GROUP BY t."name"
    ORDER BY "Summary price" DESC , 
    "Number of tours" DESC 
`;

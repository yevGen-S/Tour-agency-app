export const queryAllServices: string = `
    SELECT 
        s.id,
        st."type" AS "Service_type",
        s.price,
        c.name AS "city"
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
    JOIN "City" c 
    ON s."city_id" = c.id
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

export const getAllCommentsAndResponsesOnService: string = `
    SELECT 
        f.id  AS "feedback_id",
        f.service_id,
        f.rating,
        f."text" AS "feedback_text",
        f."date" AS "feedback_date",
        u.login AS "feedback_user_login",
        u."name"AS "feedback_user_name",
        u.surname  AS "feedback_user_surname",
        ur."login" AS "response_user_login",
        ur."name" AS "response_user_name",
        ur."surname" AS "response_user_surname",
        r."text" AS "response_text" ,
        r."date" AS "response_date"
    FROM "Feedback" f 
    JOIN "User" u ON f.user_id = u.id 
    LEFT JOIN "Response" r ON f.id  = r.feedback_id
    LEFT JOIN "User" ur ON r.user_id = ur.id 
    WHERE f.service_id = $1
`;

export const queryGetFeedbacksOnService: string = `
    SELECT 
        f.id  AS "feedback_id",
        f.service_id,
        f.rating,
        f."text" AS "feedback_text",
        f."date" AS "feedback_date",
        u.login AS "feedback_user_login",
        u."name"AS "feedback_user_name",
        u.surname  AS "feedback_user_surname"
    FROM "Feedback" f 
    JOIN "User" u ON f.user_id = u.id 
    WHERE f.service_id = $1
`;

export const queryGetResponsesOnService: string = `
    SELECT 
        r.id  AS "response_id",
        f.id as "feedback_id",
        f.service_id,
        u."login" AS "response_user_login",
        u."name" AS "response_user_name",
        u."surname" AS "response_user_surname",
        r."text" AS "response_text",
        r."date" AS "response_date"
    FROM "Response" r 
    JOIN "User" u ON r.user_id = u.id 
    JOIN "Feedback" f ON r.feedback_id = f.id
    WHERE f.service_id = $1
`;

export const queryPostFeedback: string = `
    INSERT INTO "Feedback" (id,rating, "text", user_id, service_id, "date")
    VALUES (uuid_generate_v4(), $1, $2, getUserId($3), $4, CURRENT_DATE )
`;

export const queryPostResponse: string = `
    INSERT INTO "Response" (id, user_id, "text", feedback_id, "date")
    VALUES (uuid_generate_v4(), getUserId($1), $2, $3, CURRENT_DATE)
`

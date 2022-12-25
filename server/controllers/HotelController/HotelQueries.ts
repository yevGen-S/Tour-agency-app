export const queryGetAllHotels: string = `
    SELECT 
        h.id, 
        h."name" AS name,
        h.food,
        h.price_for_nignt , 
        c."name" AS city
    FROM "Hotel" h
    JOIN "City" c ON
    h.city_id = c.id 
`;

export const queryAddHotel: string = `
    INSERT INTO "Hotel" (id,  "name" , city , food , price_for_nignt)
    VALUES (uuid_generate_v4(), $1, getCityId($2), $3, $4 )
`;

export const queryDeleteHotel: string = `
    DELETE
    FROM "Hotel"
    WHERE id = $1
`;

/**
 * query to change hotel
 */
export const queryChangeHotel: string = `
    UPDATE "Hotel"
    SET
        "name" = $2,
        "city_id" = $3,
        "food" = $4,
        price_for_nignt = $5
    WHERE "Hotel".id = $1
`;

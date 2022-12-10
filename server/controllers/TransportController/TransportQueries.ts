export const queryGetAllTransports: string = `
    SELECT 
        t.id,
        tt."type" AS "Transport_type",
        tt.price,
        c.name AS "From city",
        c2.name AS "To city",
        tt.number_of_places 
    FROM "Transport" t 
    JOIN "Transport_type" tt ON t.transport_type_id  = tt.id
    JOIN "City" c ON t.from_city_id = c.id 
    JOIN "City" c2 ON t.to_city_id  = c2.id
`;

export const queryAddTransport: string = `
    INSERT INTO "Transport" VALUES(
        uuid_generate_v4(),
        getTransportTypeId($1),
        getCityId($2),
        getCityId($3)
    )
`;

export const queryGetTransportById: string = `
    SELECT 
        t.id,
        tt."type" AS "Transport_type",
        tt.price,
        c.name AS "From city",
        c2.name AS "To city",
        tt.number_of_places 
    FROM "Transport" t 
    JOIN "Transport_type" tt ON t.transport_type_id  = tt.id
    JOIN "City" c ON t.from_city_id = c.id 
    JOIN "City" c2 ON t.to_city_id  = c2.id
    WHERE t.id = $1
`;

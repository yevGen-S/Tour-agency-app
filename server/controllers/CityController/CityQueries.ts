export const queryGetAllCities = `
    SELECT* FROM "City" c 
`;

export const queryAddCity = `
    INSERT INTO "City" VALUES (uuid_generate_v4(), $1)
`;

export const queryGetAllResponse = `
    SELECT *
    FROM "Response" r 
`;

export const queryAddResponse = `
    INSERT INTO "Response" (id, user_id, "text", feedback_id, "date")
    VALUES (uuid_geerate_v4(), $1, $2, $3, CURRENT_DATE)
`;

export const queryDeleteResponse = `
    DELETE FROM "Response" WHERE 
    id = $1
`;

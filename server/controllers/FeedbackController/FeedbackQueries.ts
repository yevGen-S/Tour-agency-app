export const queryGetAllFeedback = `
    SELECT 
        f.id,
        f."text",
        f.rating,
        f.user_id AS user_id,
        f.service_id,
        f."date"
    FROM "Feedback" f 
`;

export const queryAddFeedback = `
    INSERT INTO "Feedback" (id, "text" , rating , user_id, service_id, "date")
    VALUES (uuid_generate_v4(), $1, $2, $3, $4, CURRENT_DATE )
`;

export const queryDeleteFeedback = `
    WITH delete_response AS  (
        DELETE FROM "Response" r 
        WHERE r.feedback_id = $1
        RETURNING r.feedback_id 
    )
    DELETE FROM "Feedback" f 
    WHERE f.id  IN (SELECT * FROM delete_response);
`;

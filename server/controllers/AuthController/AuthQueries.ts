export const queryGetAllUsers = `
    SELECT 
        "User"."id", 
        "User"."login", 
        "User"."name", 
        "User"."surname",
        "Role"."type"
    FROM "User"
    JOIN "Role" 
    on "User"."role_id" = "Role"."id"
`;

export const queryAddUser = `
    INSERT INTO "User" 
    VALUES(
        uuid_generate_v4(),
        $1,
        $2,
        getRoleId($3),
        $4,
        $5,
        $6,
        $7, 
        $8
    )
`;

export const queryIsUserExists = `
    SELECT EXISTS(
        SELECT * FROM "User"
        WHERE login = $1)
`;

export const queryGetUser = `
    SELECT 
        "User"."id", 
        "User"."login",
        "User"."password", 
        "User"."name", 
        "User"."surname",
        "Role"."type" AS role
    FROM "User"
    JOIN "Role" 
    on "User"."role_id" = "Role"."id"
    WHERE "User"."login" = $1
`;

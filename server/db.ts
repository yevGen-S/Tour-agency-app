import pkg from 'pg';
const { Pool } = pkg;

import * as dotenv from "dotenv";
dotenv.config();


export const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: +process.env.DB_PORT,
    host: process.env.DB_HOST,
});

console.log('Db connected');
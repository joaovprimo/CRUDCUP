import connection from "../database/database.js";
import {QueryResult} from 'pg';

async function postGamblersRepository(username : string) : Promise <QueryResult> {
    return await connection.query(`
    INSERT INTO users (username) VALUES ($1);
    `, [username]);
}

async function getGamblersRepository(): Promise <QueryResult<string[]>>{
    return await connection.query(`
    SELECT * FROM users;
    `);
}

export {postGamblersRepository, getGamblersRepository}
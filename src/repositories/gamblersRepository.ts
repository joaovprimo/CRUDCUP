import connection from "../database/database.js";
import {QueryResult} from 'pg';

async function postGamblersRepository(username : string) : Promise <QueryResult> {
    return await connection.query(`
    INSERT INTO users (username) VALUES ($1);
    `, [username]);
}

export {postGamblersRepository}
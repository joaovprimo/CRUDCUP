import { QueryResult } from "pg";
import connection from "../database/database.js";
import { User } from "../protocols/User.js";
import { Game } from "../protocols/Game.js";
import { Bet } from "../protocols/Bet.js";

export async function getUser(userId:number): Promise<QueryResult<User>>{
    return await connection.query(`
    SELECT * FROM users WHERE id = $1;
    `,[userId]);
}

export async function getGame(gameId:number): Promise<QueryResult<Game>>{
    
    return await connection.query(`
    SELECT * FROM games WHERE id = $1;
    `,[gameId]);
}

export async function postBeting (bets:Bet): Promise<QueryResult>{
    const {userId,gameId,bet} = bets

return await connection.query(`
INSERT INTO palpites ("userId", "gameId", bet) VALUES ($1, $2, $3);
`,[userId, gameId, bet]);
}
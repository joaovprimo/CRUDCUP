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

export async function  getGameById(id: number): Promise<QueryResult>{
    return connection.query(`
    SELECT * FROM games WHERE id = $1;
    `, [id]);
}

export async function upDateGamebyId(id:number): Promise<QueryResult>{
    return connection.query(`
    UPDATE games SET opened=FALSE WHERE id=$1;
    `, [id]);
}

export async function  getBetsbyPerson(id: number): Promise<QueryResult<Bet>>{
    return connection.query(`
    SELECT * FROM palpites WHERE "userId" = $1;
    `, [id]);
}

export async function  getRights(): Promise<QueryResult>{
    return connection.query(`
    SELECT "userId" AS "user", COUNT("gotIt") as "acertos" FROM palpites WHERE "gotIt"=$1 GROUP BY "userId" ORDER BY "acertos" DESC; 
    `, [true]);
}

export async function  getBetById(id:number): Promise<QueryResult<Bet>>{
    return connection.query(`
    SELECT * FROM palpites WHERE id = $1; 
    `, [id]);
}

export async function  deleteBetByid(id:number): Promise<QueryResult>{
    return connection.query(`
    DELETE FROM palpites WHERE id = $1; 
    `, [id]);
}



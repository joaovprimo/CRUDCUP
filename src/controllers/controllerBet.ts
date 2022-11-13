import { Bet } from "../protocols/Bet.js";
import { Request, Response} from "express";
import { getUser, getGame, postBeting} from "../repositories/repositorieBet.js";
import { User } from "../protocols/User.js";

export async function postBet(req:Request, res:Response){
    const {userId, gameId, bet} = res.locals.bets;
    
   const bets : Bet = {userId, gameId, bet};
    try{
     const user = await getUser(userId)
     if(user.rowCount == 0){
        res.status(400).send('There is not an User using this Id')
        
     } 
     const game = await getGame(gameId)
     if(game.rowCount == 0){
        res.status(400).send('There is not a game using this Id')
     }
     const beting = await postBeting(bets);
     res.sendStatus(200)

    }catch(err){
        res.status(500).send(err.message)
    }

}
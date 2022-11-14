import { Bet } from "../protocols/Bet.js";
import { Request, Response} from "express";
import { getUser, getGame, postBeting, getGameById, upDateGamebyId, getBetsbyPerson, getRights, getBetById, deleteBetByid} from "../repositories/repositorieBet.js";
import { User } from "../protocols/User.js";

export async function postBet(req:Request, res:Response){
    const {userId, gameId, bet} = res.locals.bets;
    
   const bets : Bet = {userId, gameId, bet};
    try{
     const user = await getUser(userId)
     if(user.rowCount == 0){
        return res.status(400).send('There is not an User using this Id')
     } 
     const game = await getGame(gameId)
     if(game.rowCount == 0){
        return  res.status(400).send('There is not a game using this Id')
     }
     await postBeting(bets);
     return res.sendStatus(200)

    }catch(err){
      return  res.status(500).send(err.message)
    }

}

export async function upDateStatusGame(req:Request, res:Response){
    const idgame = req.params.idgame as string;
    const id = Number(idgame);
    try{
        const bet = await getGameById(id)
        console.log(bet.rows)
     if(bet.rowCount == 0){
      return res.status(400).send('There is not an Game using this Id')
     } 
     await upDateGamebyId(id)
     return res.sendStatus(200);
    }catch(err){
        return  res.status(500).send(err.message)
      }
}

export async function getBetbyIdPerson(req:Request, res:Response){
    const idPerson = req.params.idperson as string;
    const id = Number(idPerson);
    try{
        const user = await getUser(id)
        if(user.rowCount == 0){
           return res.status(400).send('There is not an User using this Id')
        } 
        const betsPerson = await getBetsbyPerson(id) 
        
     if(betsPerson.rowCount == 0){
      return res.status(400).send('There is not an Bet using this Id')
     } 
     return res.status(200).send(betsPerson.rows)

    }catch(err){
        return  res.status(500).send(err.message)
      }
}

export async function getMoreGotBetsRights(req:Request, res:Response){

    try{
        const user = await getRights()
     return res.status(200).send(user.rows)

    }catch(err){
        return  res.status(500).send(err.message)
      }
}

export async function deleteBet(req:Request, res:Response){
    const idBet = req.params.idBet as string;
    const id = Number(idBet);
    try{

        const bet = await getBetById(id)
        console.log(bet.rows)
     if(bet.rowCount == 0){
      return res.status(400).send('There is not an Game using this Id')
     } 

        await deleteBetByid(id)
     return res.sendStatus(200);

    }catch(err){
        return  res.status(500).send(err.message)
      }
}

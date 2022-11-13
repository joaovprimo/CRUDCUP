
import { Request, Response, NextFunction } from "express";
import { betSchema } from "../schemas/schemaBet.js";

export async function middlewareBet (req:Request , res: Response, next:NextFunction) {
    const {userId, gameId, bet} = req.body;
    const validation = betSchema.validate({
        userId,
        gameId,
        bet,
        
    }, {abortEarly:false});

    if(validation.error){
        const errors = validation.error.details.map(det=>det.message);
        return res.status(400).send(errors);
    }

    res.locals.bets = {
        userId,
        gameId,
        bet,

    }
    next()
}
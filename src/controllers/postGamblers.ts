import {postGamblersRepository} from '../repositories/gamblersRepository.js';
import { Request, Response } from "express";

export async function postGamblers(req:Request, res:Response){
    const username = req.body.username as string;
    console.log(username)
    try{
      await  postGamblersRepository(username);
       return  res.sendStatus(200);
    }catch(err){
      return  res.status(500).send(err.message)
    }
    
}
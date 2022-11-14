import express from "express";
import { middlewareBet } from "../middleware/middlewareBets.js";
import {postBet, upDateStatusGame, getBetbyIdPerson, getMoreGotBetsRights, deleteBet} from "../controllers/controllerBet.js"

const router = express.Router();

router.post('/bets', middlewareBet, postBet);
router.put('/bets/:idgame', upDateStatusGame);
router.get('/bets/:idperson', getBetbyIdPerson);
router.get('/bets', getMoreGotBetsRights);
router.delete('/bets/:idBet', deleteBet);


export default router;
import express from "express";
import { middlewareBet } from "../middleware/middlewareBets.js";
import {postBet} from "../controllers/controllerBet.js"

const router = express.Router();

router.post('/bets', middlewareBet, postBet)

export default router;
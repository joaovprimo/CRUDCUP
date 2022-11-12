import express from "express";
import { postGamblers, getGamblers } from "../controllers/gamblers.js";


const router = express.Router();

router.post('/gambler',postGamblers);
router.get('/gambler', getGamblers);

export default router;
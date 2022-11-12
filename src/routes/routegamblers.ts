import express from "express";
import { postGamblers } from "../controllers/postGamblers.js";

const router = express.Router();

router.post('/gambler',postGamblers);

export default router;
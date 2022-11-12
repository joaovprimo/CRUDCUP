import express from "express";
import { postGamblers } from "../controllers/postGamblers.js";
var router = express.Router();
router.post('/gambler', postGamblers);
export default router;

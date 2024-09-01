import express  from "express";
import { botReply } from "../controllers/messageBot.controller.js";

const router = express.Router();  

router.post('/bot-reply', botReply);   

export default router;
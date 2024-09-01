import express from "express";
const router = express.Router();  
import {getAllUser} from "../controllers/user.controller.js"

router.get("/get-all-user", getAllUser);

export default router;


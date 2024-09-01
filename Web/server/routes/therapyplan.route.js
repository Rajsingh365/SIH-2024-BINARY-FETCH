import express from "express";
import {getAllPlan, modifyPlan, createPlan} from "../controllers/therapyplan.controller.js"


const router = express.Router();

router.get("/", getAllPlan);
router.put("/review/:planId",modifyPlan);
router.post("/create-plan", createPlan);


export default router;
import express from "express";
import {getAllPlan,createPlan} from "../controllers/therapyplan.controller.js"

//getallplans

const router = express.Router();

router.get("/get-all-plan", getAllPlan);
router.post("/create-plan", createPlan);


export default router;
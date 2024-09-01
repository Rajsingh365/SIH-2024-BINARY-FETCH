import express from "express";
import {getAllPlan, modifyPlan} from "../controllers/therapyplan.controller.js"
// import {getAllPlan,createPlan} from "../controllers/therapyplan.controller.js"

//getallplans

const router = express.Router();

router.get("/", getAllPlan);
router.put("/review/:planId",modifyPlan);
// router.post("/create-plan", createPlan);


export default router;
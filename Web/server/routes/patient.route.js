import express from 'express';
import {getAllPatients,getParticularPatient,addNewSessionForParticularPatient} from '../controllers/patient.controller.js';
const router = express.Router();

router.get('/get-all-patients',getAllPatients);
router.get('/get-patient/:id',getParticularPatient);
router.post('/add-new-session/:id',addNewSessionForParticularPatient);
export default router; 
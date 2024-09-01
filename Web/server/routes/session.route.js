import express from 'express';
import { getAllSession,getParticularPatientSession,addSessionForPatient } from '../controllers/session.controller.js';
const router = express.Router();

router.get('/get-all-session', getAllSession);
router.get('/get-session-for-patient/:patientId', getParticularPatientSession);
router.post('/add-session-for-patient/:patientId',addSessionForPatient);
export default router;

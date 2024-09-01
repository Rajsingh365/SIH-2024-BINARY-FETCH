import express from 'express';
import { getAllSession,getParticularPatientSession,addSessionForPatient,getParticularSession } from '../controllers/session.controller.js';
const router = express.Router();

router.get('/get-all-session', getAllSession);
router.get('/get-session-for-patient/:patientId', getParticularPatientSession);
router.post('/add-session-for-patient/:patientId',addSessionForPatient);
router.get('/get-particular-session/:sessionId',getParticularSession);
export default router;
import Session from '../models/session.model.js';
import Patient from '../models/patient.model.js';
// import Therapist from '../models/therapist.model.js';
export const getAllSession = async (req, res) => {
  try {
    const sessions = await Session.find();
    res.status(200).json(sessions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const getParticularPatientSession = async (req, res) => {
  const { patientId } = req.params;
  try {
    const sessions = await Session.find
      ({ patient: patientId });
    res.status(200).json(sessions);
  }
  catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const addSessionForPatient = async (req, res) => {
  const { patientId } = req.params;
  const session = req.body;
  try {
    const newSession = new Session(session);
    await newSession.save();
    res.status(201).json(newSession);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export const getParticularSession = async (req, res) => { 
  const { sessionId } = req.params;
  try {
    const session = await Session.findById(sessionId);
    const patient = await Patient.findById(session.patient);
    const sessionObject = session.toObject ? session.toObject() : { ...session._doc };

    sessionObject.patient_name = patient.name;


    res.status(200).json(sessionObject);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
import Session from '../models/session.model.js';
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
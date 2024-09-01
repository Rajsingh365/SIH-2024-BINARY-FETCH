import Patient from "../models/patient.model.js";
export const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const getParticularPatient = async (req, res) => {
  try {
    const { id } = req.params;

    const patient = await Patient.findById(id);

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found with this id' });
    }

    res.status(200).json(patient);
  } catch (error) {
    console.error('Error fetching patient:', error);
    res.status(500).json({ message: error.message });
  }
};

export const addNewSessionForParticularPatient = async (req, res) => {
  const { id } = req.params;
  const {session_id} = req.body;
  try {
    const patient = await Patient
      .findByIdAndUpdate(id, { $push: { therapy_sessions: session_id } }, { new: true });
      if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
      }
      console.log('Patient from BE', patient);
      res.status(201).json(patient);
  }
  catch (error) {
    res.status(409).json({ message: error.message });
  }
}
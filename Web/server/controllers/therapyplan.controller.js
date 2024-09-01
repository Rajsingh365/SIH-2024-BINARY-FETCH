import TherapyPlan from "../models/therapyPlan.model.js";
import Patient from "../models/patient.model.js";
import User from "../models/user.model.js";

export const getAllPlan = async (req, res) => {
  try {
    const plans = await TherapyPlan.find().populate({
      path: "patient",
      populate: {
        path: "assigned_therapist_id",
        select: "fullName"
      }
    });
    res.status(200).json(plans);
  } catch (e) {
    console.log("Error in getAllPlan controller", e.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const createPlan = async (req, res) => {
  try {
    const {
      patient,
      therapist,
      submissionDate,
      reviewDate,
      goals,
      duration,
      priority,
      patientHistory,
      activities,
      additionalNotes,
      milestones,
    } = req.body;

    const plan = await TherapyPlan.create({
      patient,
      therapist,
      submissionDate,
      reviewDate,
      goals,
      duration,
      priority,
      patientHistory,
      activities,
      additionalNotes,
      milestones,
    });

    res.status(200).json(plan);
  } catch (e) {
    console.log("Error in createPlan controller", e.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



export const modifyPlan = async (req, res) => {
  try {
    const { feedback, status } = req.body;
    const {planId} = req.params;
    if (!planId || !feedback || !status) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const updatedPlan = await TherapyPlan.findByIdAndUpdate(
      planId,
      { feedback, status },
      { new: true }
    );

    if (!updatedPlan) {
      return res.status(404).json({ error: "Plan not found" });
    }

    // Respond with the updated plan
    res.status(200).json(updatedPlan);

  } catch (e) {
    console.log("Error in modifyPlan controller", e.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};





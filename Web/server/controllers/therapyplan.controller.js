import TherapyPlan from "../models/therapyPlan.model.js";

export const getAllPlan = async (req, res) => {
  try {
    const plans = await TherapyPlan.find();
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
      goals,
      duration,
      reviewDate,
      status,
      priority,
      activities,
    } = req.body;
    const plan = await TherapyPlan.create({
      patient,
      therapist,
      goals,
      duration,
      reviewDate,
      status,
      priority,
      activities,
    });

    res.status(200).json(plan);
  } catch (e) {
    console.log("Error in createPlan controller", e.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

import mongoose from "mongoose";

const therapyPlanSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true
  },
  therapist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  goals: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  reviewDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ["pending","approved","rejected"],
    default: "pending"
  },
  priority: {
    type: String,
    required: true
  },
  activities: {
    type: String,
    required: true
  }

}, { timestamps: true });

const TherapyPlan = mongoose.model("TherapyPlan",therapyPlanSchema);

export default TherapyPlan;

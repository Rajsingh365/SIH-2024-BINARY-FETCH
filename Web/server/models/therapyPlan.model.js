import mongoose from "mongoose";

const therapyPlanSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true
  },
  submissionDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ["Awaiting Review", "Approved", "Rejected"],
    default: "Awaiting Review"
  },
  priority: {
    type: String,
    required: true
  },
  goals: {
    type: String,
    required: true
  },
  activities: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  patientHistory: {
    type: String,
    required: true
  },
  additionalNotes: {
    type: String
  },
  milestones: [
    {
      week: {
        type: Number,
        required: true
      },
      milestone: {
        type: String,
        required: true
      }
    }
  ],
  attachments: [
    {
      type: String
    }
  ],
  reviewDate: {
    type: Date
  },
  feedback: {
    type: String,
    default: ""
  }
}, { timestamps: true });

const TherapyPlan = mongoose.model("TherapyPlan", therapyPlanSchema);

export default TherapyPlan;

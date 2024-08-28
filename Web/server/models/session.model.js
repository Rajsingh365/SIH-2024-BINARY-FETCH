import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    therapist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    activitiesPerformed: {
      type: String,
      required: true,
    },
    patientResponse: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
      required: true,
    },
    progress: {
      type: String,
      required: true
    },
    summary: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Session = mongoose.model("Session", sessionSchema);

export default Session;


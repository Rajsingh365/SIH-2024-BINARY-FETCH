import mongoose from "mongoose";

const progressReportSchema = new mongoose.Schema(
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
    sessionsCompleted: {
      type: Number,
      required: true,
    },
    progressSummary: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "reviewed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const ProgressReport = mongoose.model("ProgressReport", progressReportSchema);

export default ProgressReport;

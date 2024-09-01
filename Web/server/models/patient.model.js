import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    condition: {
      type: String,
      required: true
    },
    contact_details: {
      phone: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },
    therapy_sessions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Session',
      },
    ],
    gender: {
      type: String,
      required: true,
      enums: ["male", "female"]
    },
    assigned_therapist_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    caseDetails: {
      type: String,
      default: "",  
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    }
  },
  { timestamps: true }
);  

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;


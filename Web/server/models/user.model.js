import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["therapist", "supervisor", "admin"],
      default: "therapist",
    },
    additionalInfo: {
      type: Object,
      default: {} 
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
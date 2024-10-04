import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set the current date when a document is created
    expires: "5m", // Document will be automatically deleted 5 minutes after creation
  },
  email: {
    type: String,
    required: true,
  },
});

export default mongoose.models.OTP || mongoose.model("OTP", otpSchema);

import mongoose from "mongoose";

const RisingStarSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profileImageUrl: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    course: {
      type: String,
      required: true,
    },
    enrollNo: {
      type: Number,
      required: true,
    },
    birthdate: {
      type: Date,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    // additional info
    dateOfDeclaration: {
      type: Date,
      required: true,
      default: Date.now,
    },
    reasonForListing: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.RisingStar ||
  mongoose.model("RisingStar", RisingStarSchema);

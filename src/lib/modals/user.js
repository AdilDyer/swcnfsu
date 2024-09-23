import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
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
    school: {
      type: String,
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
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);

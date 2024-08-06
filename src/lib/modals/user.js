import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
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
});

export default mongoose.models.User || mongoose.model("User", UserSchema);

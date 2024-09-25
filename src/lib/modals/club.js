import mongoose from "mongoose";
const ClubSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    bgImageUrl: {
      type: String,
    },
    thisMonthTarget: {
      type: String,
    },
    motto: {
      type: String,
    },
    whatsappUrl: {
      type: String,
    },
    instaUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Club || mongoose.model("Club", ClubSchema);

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
    nextMeetingOn: {
      type: Date,
    },
    nextMeetingLocation: {
      type: String,
    },
    thisMonthMotto: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Club || mongoose.model("Club", ClubSchema);

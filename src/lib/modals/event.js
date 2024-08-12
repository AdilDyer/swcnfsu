import mongoose from "mongoose";
const EventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    date: {
      //includes the time
      type: Date,
    },
    clubName: {
      type: String,
    },
    description: {
      type: String,
    },
    eventImageUrl: {
      type: String,
      default:
        "https://res.cloudinary.com/ddxv0iwcs/image/upload/v1720791800/Screenshot_2024-07-12_at_7.11.05_PM_ahw1gt.png",
    },
    rsvps: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Event || mongoose.model("Event", EventSchema);

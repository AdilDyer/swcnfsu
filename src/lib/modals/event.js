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
      Introduction: {
        type: String,
      },
      Agendas: {
        type: String,
      },
      DetailedPoints: {
        type: String,
      },
      InsightsShared: {
        type: String,
      },
      GroupFindings: {
        type: String,
      },
      KeyTakeaways: {
        type: String,
      },
      FinalThoughts: {
        type: String,
      },
    },
    location: {
      type: String,
    },
    eventImageUrl: {
      type: String,
      default:
        "https://res.cloudinary.com/ddxv0iwcs/image/upload/v1727417136/Screenshot_2024-09-27_at_11.35.29_AM_rl2ket.png",
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
    attendees: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      default: [],
    },
    eventGalleryImages: {
      type: [
        {
          type: String,
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Event || mongoose.model("Event", EventSchema);
